import React from 'react';
import logo from '../../assets/img/logo.png';

export default function Banner() {
    return (
        <div>
            <header className="header-area ptb-15">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 two">
                            <div className="header-left-content">
                                <ul>
                                    <li><a href="/"><img className='logo-img' src={logo} /></a></li>
                                    <li><i className="fa fa-phone" />0123 456 789</li>
                                    <li><i className="fa fa-envelope" />R7@hcmus.edu.vn</li>

                                    <li id="li-nearlast">
                                        <form className="form-search" role="search">
                                            <input type="text" placeholder="Tìm sản phẩm" />
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-5 two">
                            <div className="header-right-content">
                                <div className="header-right-content-cart">
                                    <ul>
                                        <li><a href="/cart" className="krishok-cart"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </header >

            < section className="theme2 hero-area ptb-80" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="hero-area-content">
                                <h1>Nơi Mua Sắm Đáng Tin Cậy</h1>
                                <p>Đi Chợ Hộ được xây dựng trong bối cảnh đại dịch COVID-19 nhằm tối ưu hoá quy trình đăng ký mua hàng, giao nhận hàng hoá, tạo sự tiện lợi và đơn giản hơn cho người dân trong thời điểm dịch bệnh. Hệ thống hỗ trợ tối đa sự liên kết giữa người dân và các cửa hàng, siêu thị, để đảm bảo thực phẩm luôn được cung cấp đầy đủ, giá cả hợp lí.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
}