import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  console.log('cart', cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.items.map(item => <CartItem
          key = {item.id}
          title = {item.title}
          quantity = {item.quantity}
          price = {item.price}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
