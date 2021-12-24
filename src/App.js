import { React, Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Product from './pages/Customer/Product';
import ProductDetail from './pages/Customer/ProductDetail';
import Store from './pages/Customer/Store';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <Header />
              <Product />
              <Footer />
            </Fragment>
          } />

          <Route path='/detail' element={
            <Fragment>
              <Header />
              <ProductDetail />
              <Footer />
            </Fragment>
          } />

          <Route path='/store' element={
            <Fragment>
              <Header />
              <Store />
              <Footer />
            </Fragment>
          } />

        </Routes>
      </Router>
    );
  }
}