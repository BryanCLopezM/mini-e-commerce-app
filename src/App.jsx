import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './styles/App.css';

const App = () => {
  const items = useSelector(state => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="navbar">
        <Link to="/">Inicio</Link>

        <div className="cart-link-wrapper">
          <Link to="/cart">Carrito</Link>
          {totalQuantity > 0 && (
            <span className="cart-badge">{totalQuantity}</span>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;