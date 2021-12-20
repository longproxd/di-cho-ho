import { useNavigate } from "react-router-dom";

import logo from '../assets/img/logo.png'
import hotline from '../assets/img/hotline.svg';
import fbIcon from '../assets/img/facebook.svg';
import zaloIcon from '../assets/img/zalo.svg';

function CustomerCheckOut() {
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

    let navigate = useNavigate();

    function payClick(event) {
        event.preventDefault()

        navigate('/payment')
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
                                            <button onClick={payClick} className="krishok-btn">Payment Now <i className="fa fa-angle-right" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* checkout area end */}
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
export default CustomerCheckOut