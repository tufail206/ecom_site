import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../../types/product";

export interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalAmount: number;
    totalQuantity: number;
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    totalAmount: Number(localStorage.getItem("cartTotalAmount") || "0"),
    totalQuantity: Number(localStorage.getItem("cartTotalQuantity") || "0"),
};

const calculateTotals = (items: CartItem[]) => {
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    return { totalAmount, totalQuantity };
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity++;
            }

            const { totalAmount, totalQuantity } = calculateTotals(state.items);
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;

            localStorage.setItem("cartItems", JSON.stringify(state.items));
            localStorage.setItem("cartTotalAmount", state.totalAmount.toString());
            localStorage.setItem("cartTotalQuantity", state.totalQuantity.toString());
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity--;
                }
            }

            const { totalAmount, totalQuantity } = calculateTotals(state.items);
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;

            localStorage.setItem("cartItems", JSON.stringify(state.items));
            localStorage.setItem("cartTotalAmount", state.totalAmount.toString());
            localStorage.setItem("cartTotalQuantity", state.totalQuantity.toString());
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);

            const { totalAmount, totalQuantity } = calculateTotals(state.items);
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;

            localStorage.setItem("cartItems", JSON.stringify(state.items));
            localStorage.setItem("cartTotalAmount", state.totalAmount.toString());
            localStorage.setItem("cartTotalQuantity", state.totalQuantity.toString());
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
            localStorage.removeItem("cartItems");
            localStorage.removeItem("cartTotalAmount");
            localStorage.removeItem("cartTotalQuantity");
        },
    },
});

export const { addItem, removeItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
