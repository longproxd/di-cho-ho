import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import '../index.css';
import logo from '../assets/img/logo.png';
import hotline from '../assets/img/hotline.svg';
import fbIcon from '../assets/img/facebook.svg';
import zaloIcon from '../assets/img/zalo.svg';

function Home() {
    function loginClick(event) {
        event.preventDefault()

        document.getElementById("login-form-popup").style.display = "block"
        document.getElementById("regis-popup").style.display = "none"
    }

    function RegisClick(event) {
        event.preventDefault()

        document.getElementById("login-form-popup").style.display = "none"
        document.getElementById("regis-popup").style.display = "block"
    }

    function closeClick(event) {
        event.preventDefault()

        document.getElementById("login-form-popup").style.display = "none"
        document.getElementById("regis-popup").style.display = "none"
    }
    // eslint-disable-next-line
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Favicon */}
            <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
            <link rel="manifest" href="favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <title>Welcome | Krishok</title>
            {/* Font Awesome CSS */}
            <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css" media="all" />
            {/* Bootstrap CSS */}
            <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" media="all" />
            {/* slicknav CSS */}
            <link rel="stylesheet" href="assets/css/slicknav.min.css" />
            {/* Owl carousel CSS */}
            <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
            {/* Lightbox CSS */}
            <link rel="stylesheet" href="assets/css/lightbox.min.css" />
            {/* Bx slider CSS */}
            <link rel="stylesheet" href="assets/css/jquery.bxslider.css" />
            {/* Animate CSS */}
            <link rel="stylesheet" href="assets/css/animate.min.css" />
            {/* Main style CSS */}
            <link rel="stylesheet" type="text/css" href="assets/css/style.css" media="all" />
            {/* Responsive CSS */}
            <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" media="all" />
            {/* Page loader */}
            <div id="preloader" />
            {/* header area start */}
            <header className="header-area ptb-15">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="header-left-content">
                                <ul>
                                    <li><a href="/"><img className='logo-img' src={logo} alt="logo" /></a></li>
                                    <li><a href="#"><i className="fa fa-phone" />0123 4567 8913</a></li>
                                    <li><a href="#"><i className="fa fa-envelope" />example@gmail.com</a></li>
                                    <li id="li-nearlast">
                                        <form className="form-search" role="search">
                                            <input type="text" placeholder="Tìm cửa hàng" />
                                        </form>
                                    </li>
                                    <li>
                                        <button type="submit" className="toggle-pade">
                                            <i className="fa fa-search" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="header-right-content">
                                <ul>
                                    <li><a href="/cart" className="krishok-cart"><i className="fa fa-shopping-cart" /> <span>3</span></a></li>
                                    <li><a onClick={loginClick} href="#" className="popup-show">Login</a>
                                        <div id="login-form-popup" className="login-popup login-form contact-form">
                                            <h4>Login</h4>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="contact-container">
                                                            <input type="email" placeholder="Email Address" />
                                                            <i className="fa fa-envelope" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mb-15">
                                                        <div className="contact-container">
                                                            <input type="password" placeholder="Password" />
                                                            <i className="fa fa-eye" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 text-left mb-15">
                                                        <input type="checkbox" />
                                                        <p>Remember me</p>
                                                    </div>
                                                    <div className="col-sm-6 text-right mb-15">
                                                        <div className="popup-light">
                                                            <p>Forget Password ?</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mb-30">
                                                        <button className="krishok-btn">LOGIN</button>
                                                    </div>
                                                    <div className="col-sm-12 mb-15">
                                                        <div className="sign-with">
                                                            <p>Or Sign In With</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <a href="#" className="login-with"><i className="fa fa-facebook" /></a>
                                                        <a href="#" className="login-with"><i className="fa fa-twitter" /></a>
                                                    </div>
                                                    <div className="col-sm-12 mt-30">
                                                        <p>Don’t Have an Account ? <a onClick={RegisClick} href="#" className="registration-form-show">Create Now</a></p>
                                                    </div>
                                                </div>
                                            </form>
                                            <div onClick={closeClick} className="popup-close"><i className="fa fa-close" /></div>
                                        </div>
                                        <div id="regis-popup" className="login-popup registration-form contact-form">
                                            <h4>Create Account</h4>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="contact-container">
                                                            <input type="text" placeholder="Username" />
                                                            <i className="fa fa-user" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="contact-container">
                                                            <input type="email" placeholder="Email Address" />
                                                            <i className="fa fa-envelope" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="contact-container">
                                                            <input type="password" placeholder="Password" />
                                                            <i className="fa fa-eye" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mb-15">
                                                        <input type="password" placeholder="Retype Password" />
                                                    </div>
                                                    <div className="col-sm-12 text-left mb-15">
                                                        <input type="checkbox" />
                                                        <p>Agree with <span>terms and condition</span></p>
                                                    </div>
                                                    <div className="col-sm-12 mb-20">
                                                        <button className="krishok-btn">Create Account</button>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <p>Already Have an Account ?  <a onClick={loginClick} href="#" className="login-form-show">Login Now</a></p>
                                                    </div>
                                                </div>
                                            </form>
                                            <div onClick={closeClick} className="popup-close"><i className="fa fa-close" /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header > {/* header area end */}
            {/* menu area start */}
            <div className="menubar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-6">
                        </div>
                        <div className="col-md-10 col-sm-6">
                            <div className="responsive-menu" />
                            <div className="mainmenu">
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* menu area end */}
            {/* hero area start */}
            <section className="hero-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-8 col-sm-10">
                            <div className="hero-area-content ptb-80">
                                <h1>A Place of All Organic Products</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-slider">
                    <div className="item-content">
                        <div className="item-slider item-slider1" />
                        <div className="item-slider item-slider2" />
                    </div>
                </div>
                <div className="item-thumbnail">
                    <a href="#" data-slide-index={0}>
                        <div className="list-thumb list-thumb1" />
                    </a>
                    <a href="#" data-slide-index={1}>
                        <div className="list-thumb list-thumb2" />
                    </a>
                </div>{/*/Slider thumbnail*/}
            </section>{/* hero area end */}
            {/* shopping product area start */}
            <section className="shopping-product ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="shopping-product-menu max-width-360">
                                <ul>
                                    <li data-filter="*" className="active">Gần tôi</li>
                                    <li data-filter=".new">Được mua nhiều</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row product-item">
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 best seasonal">
                            <div className="sell-item max-width-360">
                            <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <p><a href="store-details">Tên Cửa Hàng</a></p>
                                <h5>Địa Chỉ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="pagination">
                                <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li className="active"><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>{/* shopping product area end */}
            {/* footer area start */}
            <div class="system-footer">
                <p>Hệ thống đi chợ thuê - bản quyền thuộc nhóm phát triển R7</p>
            </div>
            {/* footer area end */}
            {/* jquery main JS */}
            {/* Poppers JS */}
            {/* Bootstrap JS */}
            {/* slicknav JS */}
            {/* owl carousel JS */}
            {/* Isotope JS */}
            {/* Bx slider JS */}
            {/* lightbox JS */}
            {/* Wow JS */}
            {/* Google map api */}
            {/* Imagezoom JS */}
            {/* main JS */}
            <Helmet>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/jquery.slicknav.min.js"></script>
                <script src="assets/js/owl.carousel.min.js"></script>
                <script src="assets/js/isotope-3.0.4.min.js"></script>
                <script src="assets/js/jquery.bxslider.min.js"></script>
                <script src="assets/js/lightbox.min.js"></script>
                <script src="assets/js/wow-1.3.0.min.js"></script>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXNQbOV3ZGoxAQ_H2FtRAS_i9yOdZFfBo&region=GB"></script>
                <script src="assets/js/jquery.imagezoom.js"></script>
                <script src="assets/js/main.js"></script>
            </Helmet>

        </div >
    );
}

export default Home;