import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function MatHang() {
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

    const navigate = useNavigate();
    function handleClick() {
        navigate('/combo');
    }

    return (
        <div>
            <section className="shopping-product ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="shopping-product-menu max-width-360">
                                <ul>
                                    <li data-filter=".mathang" className="active">Tất Cả Mặt Hàng</li>
                                    &nbsp;
                                    <li data-filter=".combo" onClick={handleClick}>Combo Mặt Hàng</li>
                                    &nbsp;
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row product-item">
                        {MatHang.map(MatHang =>
                            <div className="col-lg-3 col-sm-6 MatHang" key={MatHang.Id}>
                                <div className="sell-item max-width-360">
                                    <div className="product-img">
                                        <img src={MatHang.hinh_anh} />
                                        <div className="product-img-overlay">
                                            <a href="/cart" className="krishok-btn">THÊM VÀO GIỎ HÀNG<i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                    <p><a href="/">{MatHang.ten_mat_hang}</a></p>
                                    <h5>{MatHang.gia_ban.toLocaleString()} vnd | {MatHang.khoi_luong} kg</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}