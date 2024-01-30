import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui';

import classes from './CartButton.module.css';

const CartButton = () => {
  const cartQuantity = useSelector(state => state.cart.quantity);

  const dispatch = useDispatch();

  const buttonClickHandler = () => dispatch(uiActions.toggleCart())

  return (
    <button onClick={buttonClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
