import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [{
        id: 1,
        title: 'Test item 1',
        quantity: 2,
        price: 3
    }, {
        id: 2, 
        title: 'Test item 2',
        quantity: 4,
        price: 2
    }],
    showCart: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state) {

        },
        remove(state) {

        },
        toggleCart(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;