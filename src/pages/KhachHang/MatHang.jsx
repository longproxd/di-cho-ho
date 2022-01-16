import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';

import Test from './Test'

export default function MatHang(props) {
    const { accountInfo, setStoreInfo, mathang, setMatHang } = props

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
                    {mathang && <Test accountInfo={accountInfo} setStoreInfo={setStoreInfo}
                        mathang={mathang} setMatHang={setMatHang} />}
                </div>
            </section>
        </div>
    );
}