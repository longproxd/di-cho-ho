import logo from '../assets/img/logo.png'
import productimg5 from '../assets/img/main-product/5.jpg'
import productimg6 from '../assets/img/main-product/6.jpg'
import productimg7 from '../assets/img/main-product/7.jpg'
import productimg8 from '../assets/img/main-product/8.jpg'
import productimg9 from '../assets/img/main-product/9.jpg'
import productimg10 from '../assets/img/main-product/10.jpg'
import productimg11 from '../assets/img/main-product/11.jpg'
import productimg12 from '../assets/img/main-product/12.jpg'
import { Helmet } from "react-helmet";
import {useState} from 'react';

function StoreDetail() {
    // eslint-disable-next-line
   
    return (
        <div>
           
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
                                    <li><a href="#"><i className="fa fa-phone" />0123 4567 8913</a></li>
                                    <li><a href="#"><i className="fa fa-envelope" />R7@hcmus.edu.vn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="header-right-content">
                                <ul>
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
            </header>{/* header area end */}
            {/* menu area start */}
            <div className="menubar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-6">
                            <div className="logo">
                                <a href="/"><img src={logo} alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-6">
                            <div className="responsive-menu" />
                            <div className="mainmenu">
                                <ul id="primary-menu">
                                    <li className="active"><a href="/">Home</a></li>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/products.html">Products</a></li>
                                    <li><a href="#">Pages <i className="fa fa-angle-down" /></a>
                                        <ul>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                    <li>
                                        <button type="submit" className="toggle-pade">
                                            <i className="fa fa-search" />
                                        </button>
                                        <form className="navbar-form form-box" role="search">
                                            <input type="text" placeholder="Search" />
                                        </form>
                                    </li>
                                </ul>
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
                                <a href="$" className="krishok-btn">Shop Now <i className="fa fa-shopping-cart" /></a>
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
                                    <li data-filter="*" className="active">All</li>
                                    <li data-filter=".new">New</li>
                                    <li data-filter=".best">Best Sells</li>
                                    <li data-filter=".seasonal">Seasonal</li>
                                    <li data-filter=".other">Others</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row product-item">
                        <div className="col-lg-3 col-sm-6 new other">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg5} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 best seasonal">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg6} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 other">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg7} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new best">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg8} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 other seasonal">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg9} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 new best">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg10} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 seasonal">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg11} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 best">
                            <div className="sell-item max-width-360">
                                <div className="product-img">
                                    <img src={productimg12} alt="img 270x235" />
                                    <div className="product-img-overlay">
                                        <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                    </div>
                                </div>
                                <p><a href="product-details.html">Product Name</a></p>
                                <h5>$50.00</h5>
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
            <footer className="site-footer pt-75">
                <div className="footer-bottom-bg ptb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom">
                                    <p>Copyright © 2017 - All Right Reserved</p>
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

export default StoreDetail;