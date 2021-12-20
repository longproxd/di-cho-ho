import logo from '../assets/img/logo.png'
function Products() {
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
                            <div className="logo">
                                <a href="/"><img src="assets/img/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-6">
                            <div className="responsive-menu" />
                            <div className="mainmenu">
                                <ul id="primary-menu">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li className="active"><a href="products.html">Products</a></li>
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

            {/* all product area start */}
            <section className="all-product ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-dropdown max-width-360">
                                <div className="dropdowns-select">
                                    <select>
                                        <option value="Product">Select Product</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-dropdown max-width-360">
                                <div className="dropdowns-select">
                                    <select>
                                        <option value="Catagory">Select Catagory</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-dropdown max-width-360">
                                <div className="dropdowns-select">
                                    <select>
                                        <option value="Brand">Select Brand</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-dropdown max-width-360">
                                <div className="dropdowns-select">
                                    <select>
                                        <option value="Price">Price Rang</option>
                                        <option value="Price1">$120 - $150</option>
                                        <option value="Price2">$200 - $280</option>
                                        <option value="Price3">$70 - $190</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/1.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$45</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/2.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$32</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/3.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$22</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/4.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$27</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/5.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$25</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/6.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$12</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/7.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$27</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/8.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$21</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/9.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$25</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/10.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$19</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/11.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$27</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-product max-width-360">
                                <div className="single-product-img">
                                    <div className="product-img">
                                        <img src="assets/img/main-product/12.jpg" alt="" />
                                        <div className="product-img-overlay">
                                            <a href="#" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="product-info">
                                        <a href="product-details.html"><h4>Product Name</h4></a>
                                        <p>Brand Name will be Here</p>
                                        <span className="price">Price: <strong>$29</strong></span>
                                    </div>
                                    <div className="product-icon">
                                        <a href="#"><i className="fa fa-heart" /></a>
                                        <a href="#"><i className="fa fa-share-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="pagination">
                                <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                                <li><a href="#">1</a></li>
                                <li className="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product-tab">
                                <i className="fa fa-shopping-cart" />
                                <h4>Free Shipping</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-tab product-tab-2">
                                <i className="fa fa-thermometer-quarter" />
                                <h4>Quality Product</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-tab product-tab-3">
                                <i className="fa fa-thumbs-up" />
                                <h4>Money Back Guarantee</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* all product area end */}

            {/* footer area start */}
            <div class="system-footer">
                <p>Hệ thống đi chợ thuê - bản quyền thuộc nhóm phát triển R7</p>
            </div>
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
        </div>

    );
}

export default Products