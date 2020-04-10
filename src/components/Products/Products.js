import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../../utils/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${URL}/products`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <>
        <ul>
          {error ? (
            <li>{error.message}</li>
          ) : (
            <div>
              {products.map((product) => (
                <ul key={product.id}>
                  <li>{product.title}</li>
                </ul>
              ))}
            </div>
          )}
        </ul>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Products;
