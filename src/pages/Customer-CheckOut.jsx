function CustomerCheckOut() {
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
                                <a href="/"><img src="assets/img/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-6">
                            <div className="responsive-menu" />
                            <div className="mainmenu">
                                <ul id="primary-menu">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li className="active"><a href="#">Pages <i className="fa fa-angle-down" /></a>
                                        <ul>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li className="active"><a href="checkout.html">Checkout</a></li>
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
            <section className="theme2 theme6 hero-area ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="hero-area-content">
                                <h1 className="text-uppercase">Checkout</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since when an unknown printer took a galley</p>
                                <a href="products.html" className="krishok-btn">Continue shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* hero area end */}
            {/* checkout area start */}
            <section className="bg-color checkout-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-form">
                                <h3>Shipping Address</h3>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="select-container">
                                                <select>
                                                    <option value="country">Country</option>
                                                    <option value="bangladesh">Bangladesh</option>
                                                    <option value="india">India</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="select-container">
                                                <select>
                                                    <option value="state">State</option>
                                                    <option value={1500}>1500</option>
                                                    <option value={1589}>1589</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="City" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Zip or Postal Code" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="text" placeholder="Address Line 1" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="text" placeholder="Address Line 2 (Optional)" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Additional Instruction" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-3 offset-lg-9 col-md-6 offset-md-6 mt-30">
                                            <button className="krishok-btn">Payment Now <i className="fa fa-angle-right" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* checkout area end */}
            {/* get quote area start */}
            <section className="get-quote ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Get Update About Products</h2>
                            <form action="#">
                                <input type="text" placeholder="Email Address" />
                                <button type="submit">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>{/* get quote area end */}
            {/* footer area start */}
            <footer className="site-footer pt-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">About Us</a></h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of tand scrambled it to make a type specimen wonder full book. </p>
                                <div className="widget-icon">
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-pinterest" /></a>
                                    <a href="#"><i className="fa fa-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Keep in touch</a></h5>
                                <ul>
                                    <li>Address : 97 New Design Street, Dhaka BD</li>
                                    <li>Phone : 1234 5678 9123</li>
                                    <li>Email : Stevan@Example.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h5 className="widget-title"><a href="#">Instagram Feed</a></h5>
                                <div className="img-gallery">
                                    <div className="single-img-gallery">
                                        <a href="#"><img src="assets/img/widget/widget1.jpg" alt="" /></a>
                                    </div>
                                    <div className="single-img-gallery">
                                        <a href="#"><img src="assets/img/widget/widget2.jpg" alt="" /></a>
                                    </div>
                                    <div className="single-img-gallery">
                                        <a href="#"><img src="assets/img/widget/widget3.jpg" alt="" /></a>
                                    </div>
                                    <div className="single-img-gallery">
                                        <a href="#"><img src="assets/img/widget/widget4.jpg" alt="" /></a>
                                    </div>
                                    <div className="single-img-gallery">
                                        <a href="#"><img src="assets/img/widget/widget5.jpg" alt="" /></a>
                                    </div>
                                    <div className="single-img-gallery">
                                        <a href="#"><img src="assets/img/widget/widget6.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </footer>{/* footer area end */}
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
export default CustomerCheckOut