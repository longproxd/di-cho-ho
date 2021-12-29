import { React, Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Product from './pages/Customer/Product';
import ProductDetail from './pages/Customer/ProductDetail';
import Store from './pages/Customer/Store';
import ShipperHome from './pages/Shipper/Home';
import OrderDetail from './pages/Shipper/OrderDetail';
import OrderConfirmation from './pages/Shipper/OrderConfirmation';

import AdminHome from './pages/Admin/Home';
import UserAccountManagement from './pages/Admin/UserAccountManagement';
import ClientManagement from './pages/Admin/ClientManagement';
import OrderManagement from './pages/Admin/OrderManagement';
import CustomerManagement from './pages/Admin/CustomerManagement';
import CustomerStatistic from './pages/Admin/CustomerStatistic';
import ShipperManagement from './pages/Admin/ShipperManagement';
import ShipperStatistic from './pages/Admin/ShipperStatistic';
import StoreManagement from './pages/Admin/StoreManagement';
import StoreStatistic from './pages/Admin/StoreStatistic';
import EssentialProducts from './pages/Admin/EssentialProducts';
import Demand from './pages/Admin/Demand';
import RegistrationApproval from './pages/Admin/RegistrationApproval';
import Commitment from './pages/Admin/Commitment';

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

          <Route path='/shipper-home'  element={<ShipperHome />} />
          <Route path="/shipper-home/orderdetail" exact element={<OrderDetail />} />
          <Route path="/shipper-home/orderconfirmation" exact element={<OrderConfirmation />} />
          <Route path="/admin-home" exact element={<AdminHome/>} />
          <Route path="/admin/management/useraccount" exact element={<UserAccountManagement/>} />
          <Route path="/admin/management/client" exact element={<ClientManagement/>} />
          <Route path="/admin/management/order" exact element={<OrderManagement/>} />
          <Route path="/admin/statistic/customermanagement" exact element={<CustomerManagement/>} />
          <Route path="/admin/statistic/customerstatistic" exact element={<CustomerStatistic/>} />
          <Route path="/admin/statistic/shippermanagement" exact element={<ShipperManagement/>} />
          <Route path="/admin/statistic/shipperstatistic" exact element={<ShipperStatistic/>} />
          <Route path="/admin/statistic/storemanagement" exact element={<StoreManagement/>} />
          <Route path="/admin/statistic/storestatistic" exact element={<StoreStatistic/>} />
          <Route path="/admin/statistic/essentialproducts" exact element={<EssentialProducts/>} />
          <Route path="/admin/statistic/citizendemand" exact element={<Demand/>} />
          <Route path="/admin/registration_approval" exact element={<RegistrationApproval/>} />
          <Route path="/admin/commitment" exact element={<Commitment/>} />
        </Routes>
      </Router>
    );
  }
}