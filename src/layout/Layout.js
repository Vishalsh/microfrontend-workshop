import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProductList from '../catalog/ProductList';
import ProductDetail from '../catalog/ProductDetail';
import Cart from '../cart/Items';
import Header from './Header';
import Footer from './Footer';

import * as S from './Layout.styles';

export default () => {
  return (
    <S.Layout>
      <Header />
      <S.Main>
        <div className='container'>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="Cart" element={<Cart />} />
          </Routes >
        </div>
      </S.Main>

      <Footer />
    </S.Layout>
  )
}