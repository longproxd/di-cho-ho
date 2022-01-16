import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function Store({storeInfo}) {
    const url = 'http://localhost:8080/api/mathang/tai/' + storeInfo.mach;
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
                    <h1>{storeInfo.tench}</h1>
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
                            <div className="col-lg-3 col-sm-6 MatHang" key={MatHang.mamh}>
                                <div className="sell-item max-width-360">
                                    <div className="product-img">
                                        <img src={MatHang.hinhanh} />
                                        <div className="product-img-overlay">
                                            <a href="/cart" className="krishok-btn">THÊM VÀO GIỎ HÀNG<i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                    <p>{MatHang.ten}</p>
                                    <h5>{MatHang.gia.toLocaleString()} vnd | {MatHang.khoiluong} kg</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}