import Header from '../../components/StoreOwner/Header';
import Footer from '../../components/StoreOwner/Footer';
import Sidebar from '../../components/StoreOwner/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function StoreHome() {
    const url = 'https://localhost:8001/api/mathang';
    const [MatHang, setMatHang] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setMatHang(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Header />
            <Sidebar />
            <section className="shopping-product ptb-80">
                <div className="container">
                    <div className="row product-item">
                        {MatHang.map(MatHang =>
                            <div className="col-lg-3 col-sm-6 MatHang" key={MatHang.Id}>
                                <div className="sell-item max-width-360">
                                    <div className="product-img">
                                        <img src={MatHang.hinh_anh} />
                                    </div>
                                    <p>{MatHang.ten_mat_hang}</p>
                                    <h5>{MatHang.gia_ban.toLocaleString()} vnd | {MatHang.khoi_luong} kg</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default StoreHome;