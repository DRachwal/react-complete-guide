import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateCart, getCart } from './store/cart-actions';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const isCartVisible = useSelector(state => state.ui.isCartVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect 1')
    console.log('Get cart data here');
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    console.log('useEffect 2')
    if (isInitial) {
      console.log('isInitial=true here')
      isInitial = false;
      return;
    }
    console.log('Send cart data here cart', cart);
    dispatch(updateCart(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
