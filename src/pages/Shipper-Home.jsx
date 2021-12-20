function ShipperHome() {
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
                                    <li><a href="#"><i className="fa fa-envelope" />example@gmail.com</a></li>
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
            </header>{/* header area end */}
            {/* menu area start */}
            <div className="menubar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-6">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-6">
                            <div className="responsive-menu" />
                            <div className="mainmenu">
                                <ul id="primary-menu">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="products.html">Products</a></li>
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

            <section>
                <div>

                </div>
            </section>

            {/* footer area start */}
            <div class="system-footer">
                <p>Hệ thống đi chợ thuê - bản quyền thuộc nhóm phát triển R7</p>
            </div>
            {/* footer area end */}
        </div>

    );
}

export default ShipperHome