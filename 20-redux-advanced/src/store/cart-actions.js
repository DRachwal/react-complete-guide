import { uiActions } from './ui';
import { cartActions } from './cart';

export const updateCart = (cart) => async (dispatch) => {
  console.log('updateCart');
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data'
    })
  );

  try {
    const response = await fetch(
      'https://react-redux-22c17-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      }
    )

    if (!response.ok) {
      throw new Error('Sending cart data failed');
    }

    const data = await response.json();
    console.log('data', data);

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Cart data has been sent'
      })
    );
  } catch (error) {
    dispatch(uiActions.showNotification({
      status: 'error',
      title: 'Error',
      message: 'Sending cart data failed'
    }));
  }
};

export const getCart = () => async dispatch => {
  console.log('getCart');
  try {
    const response = await fetch('https://react-redux-22c17-default-rtdb.firebaseio.com/cart.json');
    const data = await response.json();
    console.log('data', data)
    dispatch(cartActions.setCart(data));
  } catch (error) {
    dispatch(uiActions.showNotification({
      status: 'error',
      title: 'Error',
      message: 'Fetching cart data failed'
    }));
  }
}