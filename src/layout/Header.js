import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Heading4 } from 'ui-components';
import * as S from './Header.styles';

export default () => {
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem('products')) || []);

  const addToCartEventlistener = ({ detail }) => {
    const currentProductsInCart = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProductsInCart = [...currentProductsInCart, detail.productId];
    setProductsInCart(updatedProductsInCart);
    localStorage.setItem('products', JSON.stringify(updatedProductsInCart));
  };

  const removeFromCartEventlistener = ({ detail }) => {
    const currentProductsInCart = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProductsInCart = currentProductsInCart.filter(p => p !== detail.productId);
    setProductsInCart(updatedProductsInCart);
    localStorage.setItem('products', JSON.stringify(updatedProductsInCart));
  };

  useEffect(() => {
    window.addEventListener('ADD_TO_CART', addToCartEventlistener)
    window.addEventListener('REMOVE_FROM_CART', removeFromCartEventlistener)
    return () => {
      window.removeEventListener('ADD_TO_CART', addToCartEventlistener)
      window.removeEventListener('REMOVE_FROM_CART', addToCartEventlistener)
    }
  }, []);

  return (
    <S.Header>
      <div className='container'>
        <S.Content>
          <Link to="/products">
            <Heading4>CBP Marketplace</Heading4>
          </Link>
          <S.CartLink to="/cart">
            Cart
            {
              productsInCart.length > 0 &&
              <S.CartCount>{productsInCart.length}</S.CartCount>
            }
          </S.CartLink>
        </S.Content>
      </div>
    </S.Header>
  )
}