import { cartActions } from './cart';
import { notificationActions } from './notification';

export const getCartData = () => {
    return dispatch => {
        fetch('https://react-tutorial-bb16b.firebaseio.com/cart.json')
            .then(response => response.json())
            .then(data => {
                const newCartData = data || [];
                dispatch(cartActions.setCart(newCartData));
            })
            .catch(() => {
                dispatch(notificationActions.setNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Error'
                }));
            })
    }
}

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
            .then(() => {
                dispatch(notificationActions.setNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sent cart data successfully'
                }));
            })
            .catch(() => {
                dispatch(notificationActions.setNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Error'
                }));
            })
    }
};