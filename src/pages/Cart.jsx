import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../features/cart/cartSlice';
import '../styles/Cart.css';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
        <h2>Carrito de Compras</h2>
        {items.length === 0 ? (
            <p>El carrito está vacío.</p>
        ) : (
            <>
            {items.map(item => (
                <CartItem item={item} key={item.id} />
            ))}
            <h3 className='total'>Total: ${total.toFixed(2)}</h3>
            <div className='poss-btn'>
                <button className='check' onClick={() => alert(`Resumen de compra: $${total.toFixed(2)}`)}>Checkout</button>
                <button className='clean' onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
            </div>
            </>
        )}
    </div>
  );
};

export default Cart;