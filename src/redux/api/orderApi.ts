import { apiSlice } from "./apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (orderData) => ({
                url: "/orders",
                method: "POST",
                body: orderData,
            }),
            invalidatesTags: ["Order"],
        }),
        createPaymentIntent: builder.mutation({
            query: (amount) => ({
                url: "/orders/create-payment-intent",
                method: "POST",
                body: { amount },
            }),
        }),
        confirmPayment: builder.mutation({
            query: (orderId) => ({
                url: `/orders/${orderId}/confirm`,
                method: "PATCH",
            }),
            invalidatesTags: ["Order"],
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useCreatePaymentIntentMutation,
    useConfirmPaymentMutation,
} = orderApi;
