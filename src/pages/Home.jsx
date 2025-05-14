import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home">
        <h2>Catálogo de Productos</h2>
        <div className="product-grid">
            {products.map(product => (
            <ProductCard product={product} key={product.id} />
            ))}
        </div>
    </div>
  );
};

export default Home;