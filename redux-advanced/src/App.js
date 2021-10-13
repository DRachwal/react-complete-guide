import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCartData, sendCartData } from './store/cart-actions';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

const App = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.notification.notification);

    useEffect(() => {
        dispatch(getCartData());
    }, [dispatch]);

    useEffect(() => {
        if(isInitial) {
            isInitial = false;
            return;
        }

        dispatch(sendCartData(cart.items));
    }, [cart.items, dispatch]);

    console.log('cart', cart);
    
    return (
        <Fragment>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message} />}
            <Layout>
                {cart.showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
