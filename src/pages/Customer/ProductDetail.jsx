import logo from '../../assets/img/logo.png';
import axios from 'axios';
import { Component } from 'react';

export default class Product extends Component {
    state = {
        MatHang: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/mathang')
            .then(res => {
                const MatHang = res.data;
                this.setState({ MatHang });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <body>
                <header className="header-area ptb-15">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 two">
                                <div className="header-left-content">
                                    <ul>
                                        <li><a href="/"><img className='logo-img' src={logo} alt="logo" /></a></li>
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
                                            <li>
                                                <a href="/cart" className="krishok-cart"><i className="fa fa-shopping-cart" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </header >

                <section class="product pt-75" style={{ background: "#fff" }}>
                    <div class="container">
                        {this.state.MatHang.slice(0, 1).map(MatHang =>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="carousel slide" data-ride="carousel" id="quote-carousel">
                                        <div class="carousel-inner">
                                            <div class="item active carousel-item">
                                                <div class="item-carousel-wrap zoom">
                                                    <img src={MatHang.hinh_anh} alt="product-details" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-7">
                                    <div class="product-details-content pb-75">
                                        <div class="product-details-left">
                                            <div class="product-details-title">
                                                <h3>{MatHang.ten_mat_hang}</h3>
                                            </div>
                                            <div class="product-details-price">
                                                <p>Giá bán: {MatHang.gia_ban} vnd</p>
                                            </div>
                                            <div class="review-star">
                                                <p>Mã cửa hàng: {MatHang.ma_cua_hang}</p>
                                            </div>
                                            <div class="product-details-category">
                                                <p>Khối lượng: {MatHang.khoi_luong} kg</p>
                                                <p>Số lượng tồn: {MatHang.so_luong_ton}</p>
                                            </div>
                                        </div>
                                        <div class="product-details-btn">
                                            <a href="/cart" class="krishok-btn">THÊM VÀO GIỎ HÀNG<i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section class="ptb-80" style={{ background: "#f9f9f9" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="sec-title mb-30">
                                    <h2>Những sản phẩm tương tự</h2>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            {this.state.MatHang.slice(0, 4).map(MatHang =>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="sell-item max-width-360 mt-30">
                                        <div className="product-img">
                                            <img src={MatHang.hinh_anh} alt="" />
                                            <div className="product-img-overlay">
                                                <a href="/cart" className="krishok-btn">THÊM VÀO GIỎ HÀNG<i className="fa fa-shopping-cart" /></a>
                                            </div>
                                        </div>
                                        <p><a href="/">{MatHang.ten_mat_hang}</a></p>
                                        <h5>{MatHang.gia_ban} vnd | {MatHang.khoi_luong} kg</h5>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </body>
        );
    }
}