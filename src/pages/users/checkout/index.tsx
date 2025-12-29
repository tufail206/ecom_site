import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useCreatePaymentIntentMutation } from "../../../redux/api/orderApi";
import { ShieldCheck, CreditCard, Lock } from "lucide-react";

// Replace with your actual publishable key
const stripePromise = loadStripe("pk_test_placeholder");

import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

const Checkout = () => {
    const { totalAmount: cartTotal } = useSelector((state: RootState) => state.cart);
    const [clientSecret, setClientSecret] = useState("");
    const [createPaymentIntent] = useCreatePaymentIntentMutation();

    const shipping = 0; // Free shipping
    const amount = cartTotal + shipping;

    useEffect(() => {
        if (amount <= 0) return;
        const fetchIntent = async () => {
            try {
                const response = await createPaymentIntent(amount).unwrap();
                setClientSecret(response.clientSecret);
            } catch (err) {
                console.error("Error creating payment intent:", err);
                setClientSecret("demo_secret");
            }
        };
        fetchIntent();
    }, [createPaymentIntent, amount]);

    const appearance = {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#16a34a', // green-600
        },
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="max-w-6xl mx-auto p-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Summary & Trust */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Finalize Order</h1>
                        <p className="text-gray-500 text-lg">Complete your purchase securely using Stripe.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-6 rounded-3xl bg-green-50/50 border border-green-100 flex items-start gap-4">
                            <ShieldCheck className="text-green-600 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900">Secure Payment</h4>
                                <p className="text-sm text-gray-500">Your transaction is encrypted and secured by Stripe's global network.</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100 flex items-start gap-4">
                            <CreditCard className="text-blue-600 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900">Multiple Methods</h4>
                                <p className="text-sm text-gray-500">We accept major credit cards, Apple Pay, and Google Pay for your convenience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-50 mb-4">
                            <span className="text-gray-500 font-medium">Subtotal</span>
                            <span className="font-black text-gray-900">${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-50 mb-4">
                            <span className="text-gray-500 font-medium">Shipping</span>
                            <span className="font-black text-green-600">FREE</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-xl font-bold text-gray-900">Total</span>
                            <span className="text-3xl font-black text-green-600">${amount.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-400 grayscale opacity-50">
                        <Lock size={16} />
                        <span className="text-xs font-medium uppercase tracking-widest">PCI DSS Compliant</span>
                    </div>
                </div>

                {/* Right: Stripe Form */}
                <div className="lg:col-span-7">
                    {clientSecret ? (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm amount={amount} />
                        </Elements>
                    ) : (
                        <div className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center h-full bg-white rounded-3xl border border-gray-100 shadow-xl">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                            <p className="text-gray-500 font-medium">Initializing secure checkout...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export { Checkout as Component };
