import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
      <div className="cart-item">
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
            dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))
            }
        />
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
    </div>
  );
};

export default CartItem;