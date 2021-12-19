import logo from '../assets/img/logo.png';
import productimg5 from '../assets/img/main-product/5.jpg'
import productimg6 from '../assets/img/main-product/6.jpg'
import productimg7 from '../assets/img/main-product/7.jpg'
import productimg8 from '../assets/img/main-product/8.jpg'
import productimg9 from '../assets/img/main-product/9.jpg'
import productimg10 from '../assets/img/main-product/10.jpg'
import productimg11 from '../assets/img/main-product/11.jpg'
import productimg12 from '../assets/img/main-product/12.jpg'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import axios from 'axios';

function StoreDetail() {
    // const [cates, setCates] = useState()
    // const [pop, setPop] = useState(false)

    // axios.get("http://localhost:8080/api/loaihang")
    //         .then(res => {
    //             setCates(res.data)
    //         })
    
    // function MenuClick() {
    //     if(pop == true) {
    //         document.getElementById("menubar-popup").style.display = "block"
    //         setPop(false)
    //     }
    //     else {
    //         document.getElementById("menubar-popup").style.display = "none"
    //         setPop(true)
    //     }
    // }

    // console.log(cates)

    // eslint-disable-next-line
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
            </header>{/* header area end */}
            {/* menu area start */}
            <div className="menubar2">
                <div className="container">
                    <button onClick={MenuClick}>Danh mục sản phẩm</button>
                    <div id="menubar-popup" className='menubar-popup'>
                        <ul>
                            {/* {cates && cates.map((cate) => 
                                <li key={cate.tenloai}><a href='#'>{cate.tenloai}</a></li>
                            )} */}
                        </ul>
                    </div>
                </div>
            </div>{/* menu area end */}
            {/* hero area start */}
            {/* hero area end */}
            {/* shopping product area start */}
            <section className="shopping-product ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-1">
                            <div className="shopping-product-menu min-width-360">
                                <ul>
                                    <li data-filter="*" className="active">Tất cả</li>
                                    <li data-filter=".new">Combo</li>
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

export default StoreDetail;