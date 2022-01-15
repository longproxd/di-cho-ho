import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function MatHang({ setStoreInfo }) {
    const url = 'http://localhost:8080/api/hanghoa';
    const [MatHang, setMatHang] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
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

    function toStore(event) {
        event.preventDefault()
        navigate('/store')
    }

    function addToCart(event) {
        const productToCart = {
            so_luong: 1,
            ma_mat_hang: event.target.getAttribute('data-key'),
            ma_combo: '',
            ma_gio_hang: ''
        }

        axios.post('http://localhost:8080/api/chonhang/61c19b0209e63a5a4334aa9a', productToCart)
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
                            <div className="col-lg-3 col-sm-6 MatHang" key={MatHang["MatHang"].mamh}>
                                <div className="sell-item max-width-360">
                                    <div className="product-img">
                                        <img src={MatHang["MatHang"].hinhanh} />
                                        <div className="product-img-overlay">
                                            <button onClick={addToCart} data-key={MatHang["MatHang"].mamh} className="krishok-btn">
                                                THÊM VÀO GIỎ HÀNG
                                                <i className="fa fa-shopping-cart" />
                                            </button>
                                        </div>
                                    </div>
                                    <p>{MatHang["MatHang"].ten}</p>
                                    <button className='toStore-btn' onClick={toStore}>{MatHang["CuaHang"].tench}</button>
                                    <h5>{MatHang["MatHang"].gia.toLocaleString()} vnd | {MatHang["MatHang"].khoiluong} kg</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}