import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
