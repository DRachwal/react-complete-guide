import { createSlice } from '@reduxjs/toolkit';

import { notificationActions } from './notification';

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
        toggleCart(state) {
            console.log('state', state.items);
            state.showCart = !state.showCart;
        }
    }
});

export const sendCartData = (cart) => {
    return dispatch => {
        dispatch(notificationActions.setNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data...'
        }));

        fetch('https://react-tutorial-bb16b.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cart)
        })
        .then(response => response.json())
        .then((data) => {
            console.log('data', data);
            dispatch(notificationActions.setNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent cart data successfully'
            }));
        })
        .catch((error) => {
            console.log('error', error);
            dispatch(notificationActions.setNotification({
                status: 'error',
                title: 'Error',
                message: 'Error'
            }));
        })
    }
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;