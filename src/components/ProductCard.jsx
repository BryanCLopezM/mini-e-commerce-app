import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // oculta en 2 segundos
  };

  return (
    <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.description.slice(0, 60)}...</p>
        <div className="card-footer">
            <span>${product.price}</span>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
        {showAlert && <div className="cart-alert">Producto agregado al carrito</div>}
    </div>
  );
};

export default ProductCard;