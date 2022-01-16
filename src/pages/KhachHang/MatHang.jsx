import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function MatHang(props) {
    const url = 'http://localhost:8080/api/hanghoa';

    const {accountInfo, setStoreInfo, mathang, setMatHang} = props

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMatHang(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(mathang)

    const navigate = useNavigate();
    function handleClick() {
        navigate('/combo');
    }

    function toStore(event, obj) {
        event.preventDefault()
        setStoreInfo(obj)
        navigate('/store')
    }

    function addToCart(event) {
        const productToCart = {
            so_luong: 1,
            ma_mat_hang: event.target.getAttribute('data-key'),
            ma_combo: '',
            ma_gio_hang: ''
        }

        axios.post('http://localhost:8080/api/chonhang/' + accountInfo.id, productToCart)
        .then(res => {
            if(res.status === 201)
            {
                alert('Đã thêm vào giỏ')
            }
        })
        .catch(error => console.log(error));
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
                        {mathang.map(matHang =>
                            <div className="col-lg-3 col-sm-6 MatHang" key={matHang["MatHang"].mamh}>
                                <div className="sell-item max-width-360">
                                    <div className="product-img">
                                        <img src={matHang["MatHang"].hinhanh} />
                                        <div className="product-img-overlay">
                                            <button onClick={addToCart} data-key={matHang["MatHang"].mamh} className="krishok-btn">
                                                THÊM VÀO GIỎ HÀNG
                                                <i className="fa fa-shopping-cart" />
                                            </button>
                                        </div>
                                    </div>
                                    <p>{matHang["MatHang"].ten}</p>
                                    <button className='toStore-btn' onClick={(e) => toStore(e, matHang.CuaHang)}>{matHang["CuaHang"].tench}</button>
                                    <h5>{matHang["MatHang"].gia.toLocaleString()} vnd | {matHang["MatHang"].khoiluong} kg</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}