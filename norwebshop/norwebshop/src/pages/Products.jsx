import './App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="content">
      <h2>Our Products</h2>

      <div className="products product-catalog">
        <div className="product">
          <h3>Chicken Adobo</h3>
          <p>₱120</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <h3>Sinigang</h3>
          <p>₱150</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <h3>Lechon Kawali</h3>
          <p>₱180</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
