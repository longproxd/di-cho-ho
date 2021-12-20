
import logo from '../assets/img/logo.png';
import hotline from '../assets/img/hotline.svg';
import fbIcon from '../assets/img/facebook.svg';
import zaloIcon from '../assets/img/zalo.svg';

function ProductDetails() {
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
                                            <input type="text" placeholder="Tìm sản phẩm" />
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
                            <div className="logo">
                                <a href="/"><img src="assets/img/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-6">
                            <div className="responsive-menu" />
                            <div className="mainmenu">
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* menu area end */}
            {/* product detail area start */}
            <section className="product pt-75">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                                <div className="carousel-inner">
                                    <div className="item active carousel-item">
                                        <div className="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-1.jpg">
                                            <img src="assets/img/slide-bg-1.jpg" alt="product-details" />
                                        </div>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-5.jpg">
                                            <img src="assets/img/slide-bg-5.jpg" alt="product-details" />
                                        </div>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-6.jpg">
                                            <img src="assets/img/slide-bg-6.jpg" alt="product-details" />
                                        </div>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="item-carousel-wrap zoom" data-zoom="assets/img/slide-bg-3.jpg">
                                            <img src="assets/img/slide-bg-3.jpg" alt="product-details" />
                                        </div>
                                    </div>
                                </div>
                                <ol className="carousel-indicators">
                                    <li data-target="#quote-carousel" data-slide-to={0}>
                                        <img src="assets/img/slide-bg-1.jpg" alt="product" />
                                    </li>
                                    <li data-target="#quote-carousel" data-slide-to={1}>
                                        <img src="assets/img/slide-bg-5.jpg" alt="product" />
                                    </li>
                                    <li data-target="#quote-carousel" data-slide-to={2}>
                                        <img src="assets/img/slide-bg-6.jpg" alt="product" />
                                    </li>
                                    <li data-target="#quote-carousel" data-slide-to={3}>
                                        <img src="assets/img/slide-bg-3.jpg" alt="product" />
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="product-details-content pb-75">
                                <div className="product-details-left">
                                    <div className="product-details-title">
                                        <h3>Product Name Will be here</h3>
                                    </div>
                                    <div className="product-details-price">
                                        <p>$50.00<del>(5% off)</del></p>
                                    </div>
                                    <div className="review-star">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product-details-category">
                                        <p>In Stock</p>
                                    </div>
                                </div>
                                <div className="product-icon">
                                    <a href="#"><i className="fa fa-heart-o" /></a>
                                    <a href="#"><i className="fa fa-share-alt" /></a>
                                </div>
                                <div className="product-details-btn">
                                    <a href="/cart" className="krishok-btn">Buy Now <i className="fa fa-shopping-cart" /></a>
                                    <a href="#" className="krishok-btn krishok-btn-transparent">Add to List <i className="fa fa-heart-o" /></a>
                                </div>
                                <div className="product-details-descrip">
                                    <h3>Description</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <a href="#" className="review-btn">write a review</a>
                                    <form action="#" className="product-details-form">
                                        <input type="text" placeholder="Write your review" />
                                        <div className="dropdowns-select">
                                            <select>
                                                <option value="5 star">5 star</option>
                                                <option value="4 star">4 star</option>
                                                <option value="3 star">3 star</option>
                                                <option value="2 star">2 star</option>
                                                <option value="1 star">1 star</option>
                                            </select>
                                        </div>
                                        <button className="krishok-btn">Send Review</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* product detail area end */}

            <div class="system-footer">
                <p>Hệ thống đi chợ thuê - bản quyền thuộc nhóm phát triển R7</p>
            </div>
        </div>
    );
}

export default ProductDetails