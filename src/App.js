import { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/KhachHang/Header';
import Banner from './components/KhachHang/Banner';
import Footer from './components/KhachHang/Footer';
import MatHang from './pages/KhachHang/MatHang';
import ComboMatHang from './pages/KhachHang/ComboMatHang';

import ProductDetail from './pages/KhachHang/ProductDetail';
import Store from './pages/KhachHang/Store';
import ShipperHome from './pages/Shipper/Home';
import OrderDetail from './pages/Shipper/OrderDetail';
import OrderConfirmation from './pages/Shipper/OrderConfirmation';

import AdminHome from './pages/Admin/Home';
import CusStatistic from './pages/Admin/Statistic';
import ShipStat from './pages/Admin/ShipStat';
import StoreStat from './pages/Admin/StoreStat';
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
import LoginForm from './pages/Admin/LoginForm';
import TaiKhoan from './pages/KhachHang/TaiKhoan';
import Test from './pages/KhachHang/Test';
import Map from './components/Shipper/Map';
// import Test3 from './pages/KhachHang/Test3';

import StoreHome from './pages/StoreOwner/Home'
import EditProduct from './pages/StoreOwner/EditProduct'
import AddProduct from './pages/StoreOwner/AddProduct'
import DeleteProduct from './pages/StoreOwner/DeleteProduct'
import LichSuGiaoHang from './pages/Shipper/LichSuGiaoHang';

export default function App() {
  const [accountInfo, setAccountInfo] = useState()
  const [storeInfo, setStoreInfo] = useState()

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Fragment>
            <Header setAccountInfo={setAccountInfo} />
            <Banner />
            <MatHang setStoreInfo={setStoreInfo} />
            <Footer />
          </Fragment>
        } />

        <Route path='/combo' element={
          <Fragment>
            <Header />
            <Banner />
            <ComboMatHang />
            <Footer />
          </Fragment>
        } />

        <Route path='/detail' element={
          <Fragment>
            <Header />
            {/* <ProductDetail /> */}
            <Footer />
          </Fragment>
        } />

        <Route path='/store' element={
          <Fragment>
            <Header />
            <Store storeInfo={storeInfo} />
            <Footer />
          </Fragment>
        } />

        <Route path='/account' element={
          <Fragment>
            <Header />
            <TaiKhoan accountInfo={accountInfo} />
            <Footer />
          </Fragment>
        } />

        <Route path='/test' element={
          <Fragment>
            {/* <Header /> */}
            <Test />
            {/* <Footer /> */}
          </Fragment>
        } />

        <Route path='/test3' element={
          <Fragment>
            {/* <Header /> */}
            {/* <Test3 /> */}
            {/* <Footer /> */}
          </Fragment>
        } />

        <Route path='/shipper' element={<ShipperHome />} />
        <Route path="/shipper/orderdetail" exact element={<OrderDetail />} />
        <Route path="/shipper/orderconfirmation" exact element={<OrderConfirmation />} />
        <Route path="/shipper/history" exact element={<LichSuGiaoHang />} />
        <Route path="/admin" exact element={<AdminHome />} />
=======
        <Route path='/cart' element={
          <Fragment>
            <Header setAccountInfo={setAccountInfo} />
            <GioHang accountInfo={accountInfo} />
            <Footer />
          </Fragment>
        } />

        <Route path='/shipper-home' element={<ShipperHome />} />
        <Route path="/shipper-home/orderdetail" exact element={<OrderDetail />} />
        <Route path="/shipper-home/orderconfirmation" exact element={<OrderConfirmation />} />
        <Route path="/admin-home" exact element={<AdminHome />} />
        <Route path="/admin/statistic/customer" exact element={<CusStatistic />} />
        <Route path="/admin/statistic/shipper" exact element={<ShipStat />} />
        <Route path="/admin/statistic/store" exact element={<StoreStat />} />
        <Route path="/admin/management/useraccount" exact element={<UserAccountManagement />} />
        <Route path="/admin/management/client" exact element={<ClientManagement />} />
        <Route path="/admin/management/order" exact element={<OrderManagement />} />
        <Route path="/admin/statistic/customermanagement" exact element={<CustomerManagement />} />
        <Route path="/admin/statistic/customerstatistic" exact element={<CustomerStatistic />} />
        <Route path="/admin/statistic/shippermanagement" exact element={<ShipperManagement />} />
        <Route path="/admin/statistic/shipperstatistic" exact element={<ShipperStatistic />} />
        <Route path="/admin/statistic/storemanagement" exact element={<StoreManagement />} />
        <Route path="/admin/statistic/storestatistic" exact element={<StoreStatistic />} />
        <Route path="/admin/statistic/essentialproducts" exact element={<EssentialProducts />} />
        <Route path="/admin/statistic/citizendemand" exact element={<Demand />} />
        <Route path="/admin/registration_approval" exact element={<RegistrationApproval />} />
        <Route path="/admin/commitment" exact element={<Commitment />} />
        <Route path="/admin/login" exact element={<LoginForm />} />
        <Route path="/storeowner" exact element={<StoreHome />} />
        <Route path="/storeowner/productmanagement/addproduct" exact element={<AddProduct />} />
        <Route path="/storeowner/productmanagement/editproduct" exact element={<EditProduct />} />
        <Route path="/storeowner/productmanagement/deleteproduct" exact element={<DeleteProduct />} />
      </Routes>
    </Router>
  );
}