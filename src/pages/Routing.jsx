import { Routes, Route } from 'react-router-dom';
import StoreDetail from './Customer-StoreDetails';
import Products from './Customer-Products';
import ProductDetails from './Customer-ProductDetails';
import Home from './Home';
import Cart from './Customer-Cart';
import CustomerCheckOut from './Customer-CheckOut';
import Payment from './Customer-Payment';
// import CustomerCheckOut from './pages/Customer-CheckOut';

function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/store-details" element={<StoreDetail />} />
            <Route path="/cart" element={<Cart /> } />
            <Route path="/checkout" element={<CustomerCheckOut /> } />
            <Route path="/payment" element={<Payment /> } />
            <Route path="/products" element={<Products />} />
            <Route path="/product-details" element={<ProductDetails />} />
        </Routes>

    )
}

export default Routing;