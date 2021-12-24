import { React, Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Product from './pages/Customer/Product';

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

        </Routes>
      </Router>
    );
  }
}