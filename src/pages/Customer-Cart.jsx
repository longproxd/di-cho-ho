import React from 'react';
import { Helmet } from "react-helmet";
import logo from '../assets/img/logo.png';
import hotline from '../assets/img/hotline.svg';
import fbIcon from '../assets/img/facebook.svg';
import zaloIcon from '../assets/img/zalo.svg';

function Cart() {
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
                                    <li>
                                        <form className="form-search" role="search">
                                            <input type="text" placeholder="Tìm cửa hàng" />
                                        </form>
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
                                    <li>
                                        <select>
                                            <option value="En">En</option>
                                            <option value="Bd">Bd</option>
                                        </select>
                                    </li>
                                    <li><a href="#" className="krishok-cart"><i className="fa fa-shopping-cart" /> <span>3</span></a></li>
                                    <li><a href="#" className="popup-show">Login</a>
                                        <div className="login-popup login-form contact-form">
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
                                                        <p>Don’t Have an Account ? <a href="#" className="registration-form-show">Create Now</a></p>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="popup-close"><i className="fa fa-close" /></div>
                                        </div>
                                        <div className="login-popup registration-form contact-form">
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
                                                        <p>Already Have an Account ?  <a href="#" className="login-form-show">Login Now</a></p>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="popup-close"><i className="fa fa-close" /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="product-details-btn">
                <a href="/checkout" className="krishok-btn">Checkout <i className="fa fa-shopping-cart" /></a>
            </div>
            <footer className="site-footer pt-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-6">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Giới thiệu về công ty</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Quy chế hoạt động</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Yêu cầu hỗ trợ</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Giới thiệu về hệ thống</a></h5>
                                <div className="footer-icon">
                                    <a href="/">
                                        <img className="footer-linkIcon hotline" src={hotline} alt="hotline" />
                                    </a>
                                    <a href="/">
                                        <img className="footer-linkIcon zalo" src={zaloIcon} alt="zalo" />
                                    </a>
                                    <a href="/">
                                        <img className="footer-linkIcon facebook" src={fbIcon} alt="facebook" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Chính sách, điều khoản</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Liên hệ</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-bg ptb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom">
                                    <p>Hệ thống đi chợ thuê - bản quyền thuộc nhóm phát triển R7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
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
        </div>
    );
}

export default Cart;