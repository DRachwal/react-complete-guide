import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

import classes from './CartItem.module.css';

const CartItem = ({ id, title, quantity, price }) => {
    const dispatch = useDispatch();

    const item = { id, title, quantity, price };

    const addToCartHandler = () => {
        dispatch(cartActions.add(item));
    }

    const removeFromCartHandler = () => {
        dispatch(cartActions.remove(item.id));
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${(quantity * price).toFixed(2)}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeFromCartHandler}>-</button>
                    <button onClick={addToCartHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
