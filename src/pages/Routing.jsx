import { Routes, Route } from 'react-router-dom';
import StoreDetail from './Customer-StoreDetails';
import Products from './Customer-Products'
import ProductDetails from './Customer-ProductDetails'
// import CustomerCheckOut from './pages/Customer-CheckOut';

function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<StoreDetail />} />
            <Route path="/products.html" element={<Products />} />
            <Route path="/product-details.html" element={<ProductDetails />} />
        </Routes>

    )
}

export default Routing;