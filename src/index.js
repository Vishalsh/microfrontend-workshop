import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';
import { BrowserRouter } from 'react-router-dom';

import Layout from './layout/Layout';
import { GlobalFonts, GlobalStyles } from './layout/GlobalStyles'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <Layout />      
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
