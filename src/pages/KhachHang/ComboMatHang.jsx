import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function ComboMatHang() {
    const url = 'https://localhost:8001/api/combomathang';
    const [ComboMatHang, setComboMatHang] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setComboMatHang(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const navigate = useNavigate();
    function handleClick() {
        navigate('/');
    }

    return (
        <div>
            <section className="shopping-product ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="shopping-product-menu max-width-360">
                                <ul>
                                    <li data-filter=".mathang" onClick={handleClick}>Tất Cả Mặt Hàng</li>
                                    &nbsp;
                                    <li data-filter=".combo" className="active">Combo Mặt Hàng</li>
                                    &nbsp;
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row product-item">
                        {ComboMatHang.map(ComboMatHang =>
                            <div className="col-lg-3 col-sm-6 ComboMatHang">
                                <div className="sell-item max-width-360" key={ComboMatHang.Id}>
                                    <div className="product-img">
                                        <img src={ComboMatHang.hinh_anh} alt="" />
                                        <div className="product-img-overlay">
                                            <a href="/cart" className="krishok-btn">THÊM VÀO GIỎ HÀNG<i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                    <p><a href="/">{ComboMatHang.ten_combo}</a></p>
                                    <h5>{ComboMatHang.gia_ban.toLocaleString()} vnd | {ComboMatHang.khoi_luong} kg</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}