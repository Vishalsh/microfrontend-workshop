import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from "../reviews/Reviews";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const product = await fetch(`https://fakestoreapi.com/products/${productId}`).then(res => res.json());
    setProduct(product);
  }, []);

  const addToCart = (e) => {
    const event = new CustomEvent('ADD_TO_CART', { detail: { productId: product.id } });
    window.dispatchEvent(event)
  }

  return (
    <section className="product-detail-container">
      <article>
        <img src={product.image} width="200" alt={product.title} className="product-image" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div>
          Ratings: {product?.rating?.rate} out of 5. <br />
          No. of ratings: {product?.rating?.count}
        </div>
        <button onClick={addToCart}>Add to cart</button>
      </article>
      <Reviews />
    </section>
  );
}
