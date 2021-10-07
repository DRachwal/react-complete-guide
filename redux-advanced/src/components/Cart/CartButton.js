import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

import classes from './CartButton.module.css';

const CartButton = (props) => {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(cartActions.toggleCart())
    }

    const cartQuantity = cart.items.reduce((a, b) => a + (b['quantity'] || 0), 0);

    return (
        <button onClick={toggleCartHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
