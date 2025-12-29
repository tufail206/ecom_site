import { useState, useEffect } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface CheckoutFormProps {
    amount: number;
}

const CheckoutForm = ({ amount }: CheckoutFormProps) => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent?.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    setIsSuccess(true);
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/order-success`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message || "An unexpected error occurred.");
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    if (isSuccess) {
        return (
            <div className="text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-xl max-w-md mx-auto">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <CheckCircle2 size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
                <p className="text-gray-500 mb-6">Thank you for your purchase. Your order is being processed.</p>
                <button
                    onClick={() => window.location.href = "/"}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-100"
                >
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h3>
                <PaymentElement id="payment-element" options={{ layout: "tabs" }} />

                {message && (
                    <div className="mt-4 p-4 rounded-xl bg-red-50 text-red-600 text-sm flex items-center gap-3">
                        <AlertCircle size={18} />
                        {message}
                    </div>
                )}
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500 font-medium tracking-tight">Total Amount</span>
                    <span className="text-3xl font-black text-gray-900">${amount.toFixed(2)}</span>
                </div>

                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-3 group"
                >
                    {isLoading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <>
                            Confirm & Pay
                            <CheckCircle2 size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
                    Your payment is secured with industry-standard encryption. By paying, you agree to our Terms of Service.
                </p>
            </div>
        </form>
    );
};

export default CheckoutForm;
