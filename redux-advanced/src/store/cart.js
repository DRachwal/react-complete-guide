import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    showCart: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if(existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        remove(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);

            if(existingItem.quantity === 1) {
                const newItems = state.items.filter(item => item.id !== existingItem.id);
                state.items = newItems;
            } else {
                existingItem.quantity--;
            }
        },
        setCart(state, action) {
            state.items = action.payload;
        },
        toggleCart(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;