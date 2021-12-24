import logo from '../../assets/img/logo.png';
import axios from 'axios';
import { Component } from 'react';

export default class Product extends Component {
    state = {
        MatHang: []
    }

    componentDidMount() {
        axios.get('https://localhost:8001/api/MatHang')
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

                <div class="menubar">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 col-sm-6">
                                <div class="logo">
                                    <a href="index.html"><img src=".assets/img/logo.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div class="col-md-10 col-sm-6">
                                <div class="responsive-menu"></div>
                                <div class="mainmenu">
                                    <ul id="primary-menu">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li class="active"><a href="products.html">Products</a></li>
                                        <li><a href="#">Pages <i class="fa fa-angle-down"></i></a>
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
                                            <button type="submit" class="toggle-pade">
                                                <i class="fa fa-search"></i>
                                            </button>
                                            <form class="navbar-form form-box" role="search">
                                                <input type="text" placeholder="Search" />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="product pt-75">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="carousel slide" data-ride="carousel" id="quote-carousel">
                                    <div class="carousel-inner">
                                        <div class="item active carousel-item">
                                            <div class="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-1.jpg">
                                                <img src="assets/img/slide-bg-1.jpg" alt="product-details" />
                                            </div>
                                        </div>
                                        <div class="item carousel-item">
                                            <div class="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-5.jpg">
                                                <img src="assets/img/slide-bg-5.jpg" alt="product-details" />
                                            </div>
                                        </div>
                                        <div class="item carousel-item">
                                            <div class="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-6.jpg">
                                                <img src="assets/img/slide-bg-6.jpg" alt="product-details" />
                                            </div>
                                        </div>
                                        <div class="item carousel-item">
                                            <div class="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-3.jpg">
                                                <img src="assets/img/slide-bg-3.jpg" alt="product-details" />
                                            </div>
                                        </div>
                                    </div>
                                    <ol class="carousel-indicators">
                                        <li data-target="#quote-carousel" data-slide-to="0">
                                            <img src="assets/img/slide-bg-1.jpg" alt="product" />
                                        </li>
                                        <li data-target="#quote-carousel" data-slide-to="1">
                                            <img src="assets/img/slide-bg-5.jpg" alt="product" />
                                        </li>
                                        <li data-target="#quote-carousel" data-slide-to="2">
                                            <img src="assets/img/slide-bg-6.jpg" alt="product" />
                                        </li>
                                        <li data-target="#quote-carousel" data-slide-to="3">
                                            <img src="assets/img/slide-bg-3.jpg" alt="product" />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="product-details-content pb-75">
                                    <div class="product-details-left">
                                        <div class="product-details-title">
                                            <h3>Product Name Will be here</h3>
                                        </div>
                                        <div class="product-details-price">
                                            <p>$50.00<del>(5% off)</del></p>
                                        </div>
                                        <div class="review-star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="product-details-category">
                                            <p>In Stock</p>
                                        </div>
                                    </div>
                                    <div class="product-icon">
                                        <a href="#"><i class="fa fa-heart-o"></i></a>
                                        <a href="#"><i class="fa fa-share-alt"></i></a>
                                    </div>
                                    <div class="product-details-btn">
                                        <a href="#" class="krishok-btn">Buy Now <i class="fa fa-shopping-cart"></i></a>
                                        <a href="#" class="krishok-btn krishok-btn-transparent">Add to List <i class="fa fa-heart-o"></i></a>
                                    </div>
                                    <div class="product-details-descrip">
                                        <h3>Description</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="#" class="review-btn">write a review</a>
                                        <form action="#" class="product-details-form">
                                            <input type="text" placeholder="Write your review" />
                                            <div class="dropdowns-select">
                                                <select>
                                                    <option value="5 star">5 star</option>
                                                    <option value="4 star">4 star</option>
                                                    <option value="3 star">3 star</option>
                                                    <option value="2 star">2 star</option>
                                                    <option value="1 star">1 star</option>
                                                </select>
                                            </div>
                                            <button class="krishok-btn">Send Review</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ptb-80">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="sec-title mb-30">
                                    <h2>Simila Products</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et  consectetur adipisicing eiusmod dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/1.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/2.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/3.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/4.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="product shopping-product ptb-80">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="sec-title mb-30">
                                    <h2>Recently Viewed</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et  consectetur adipisicing eiusmod dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/8.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/9.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/5.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="sell-item max-width-360 mt-30">
                                    <div class="product-img">
                                        <img src="assets/img/main-product/10.jpg" alt="" />
                                        <div class="product-img-overlay">
                                            <a href="#" class="krishok-btn">Add to cart <i class="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <p><a href="product-details.html">Product Name</a></p>
                                    <h5>$50.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        );
    }
}