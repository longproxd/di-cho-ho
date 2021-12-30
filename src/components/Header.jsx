import { React, Component } from 'react';
import axios from 'axios';

function loginClick(event) {
    event.preventDefault()

    document.getElementById("login-form-popup").style.display = "block"
    document.getElementById("regis-popup").style.display = "none"
}

function signupClick(event) {
    event.preventDefault()

    document.getElementById("login-form-popup").style.display = "none"
    document.getElementById("regis-popup").style.display = "block"
}

function closeClick(event) {
    event.preventDefault()

    document.getElementById("login-form-popup").style.display = "none"
    document.getElementById("regis-popup").style.display = "none"
}

export default class Header extends Component {
    state = {
        KhachHang: []
    }

    // componentDidMount() {
    //     axios.post('https://localhost:8001/api/KhachHang')
    //         .then(res => {
    //             const username = res.data.username;
    //             const password = res.data.password;

    //             if (KhachHang.username == res.data.username && KhachHang.password == res.data.password) {
    //                 this.setState({ username, password });
    //             }
    //         })
    //         .catch(error => console.log(error));
    // }

    componentDidMount() {
        axios.get('https://localhost:8001/api/khachhang')
            .then(res => {
                const KhachHang = res.data;
                this.setState({ KhachHang });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <header className="header-area ptb-15" style={{ background: "#458823" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="header-left-content">
                                    <ul>
                                        <li><a href="/merchant">Kênh Người Bán</a></li>
                                        <li><a href="/shipper-home">Kênh Shipper</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="header-right-content">
                                    <ul>
                                        <li><a href="/" onClick={signupClick}>Đăng Ký</a></li>
                                        <li><a href="/" onClick={loginClick} className="popup-show">Đăng Nhập</a>
                                            <div id="login-form-popup" className="login-popup login-form contact-form">
                                                <h4>Đăng Nhập</h4>
                                                <form action="/">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="contact-container">
                                                                <input type="email" placeholder="Tên đăng nhập" />
                                                                <i className="fa fa-user" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 mb-15">
                                                            <div className="contact-container">
                                                                <input type="password" placeholder="Mật khẩu" />
                                                                <i className="fa fa-eye" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 text-left mb-15">
                                                            <input type="checkbox" />
                                                            <p>Ghi nhớ đăng nhập</p>
                                                        </div>
                                                        <div className="col-sm-6 text-right mb-15">
                                                            <div className="popup-light">
                                                                <p><span>Quên mật khẩu?</span></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 mb-30">
                                                            <button className="krishok-btn">ĐĂNG NHẬP</button>
                                                        </div>
                                                        <div className="col-sm-12 mb-15">
                                                            <div className="sign-with">
                                                                <p>Hoặc đăng nhập với</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <a href="/" className="login-with"><i className="fa fa-facebook" /></a>
                                                            <a href="/" className="login-with"><i className="fa fa-twitter" /></a>
                                                        </div>
                                                        <div className="col-sm-12 mt-30">
                                                            <p>Chưa có tài khoản? <a href="/" onClick={signupClick} className="registration-form-show">Tạo tài khoản ngay</a></p>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div onClick={closeClick} className="popup-close"><i className="fa fa-close" /></div>
                                            </div>

                                            <div id="regis-popup" className="login-popup registration-form contact-form">
                                                <h4>Đăng Ký Tài Khoản</h4>
                                                <form action="/">
                                                    <div className="row">
                                                        <div className='signup-tabs'>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="username"
                                                                        autoComplete='off'
                                                                        type="text" placeholder="Tên đăng nhập"
                                                                    />
                                                                    <i className="fa fa-user" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input type="email" placeholder="Địa chỉ Email" />
                                                                    <i className="fa fa-envelope" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="password"
                                                                        type="password" placeholder="Mật khẩu"
                                                                    />
                                                                    <i className="fa fa-eye" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 mb-15">
                                                                <input type="password" placeholder="Nhập lại mật khẩu" />
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="password"
                                                                        type="text" placeholder="Họ và tên"
                                                                    />
                                                                    <i className="fa fa-file-text-o" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="gender"
                                                                        placeholder="Giới tính" type="text"
                                                                        list='genders' />
                                                                    <datalist id="genders">
                                                                        <option value="Nam">Nam</option>
                                                                        <option value="Nữ">Nữ</option>
                                                                        <option value="Khác">Khác</option>
                                                                    </datalist>
                                                                    <i className="fa fa-venus-mars" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="password"
                                                                        type="date" placeholder="Ngày sinh"
                                                                        id="birth" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="password"
                                                                        type="text" placeholder="Số điện thoại"
                                                                    />
                                                                    <i className="fa fa-phone" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="password"
                                                                        type="text" placeholder="Địa chỉ"
                                                                    />
                                                                    <i className="fa fa-home" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="password"
                                                                        type="text" placeholder="Số CMND/CCCD"
                                                                    />
                                                                    <i className="fa fa-address-card-o" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 text-left mb-15">
                                                            <input type="checkbox" />
                                                            <p>Đồng ý với <span>các chính sách và điều khoản</span></p>
                                                        </div>
                                                        <div className="col-sm-12 mb-20">
                                                            <button onClick={signupClick} className="krishok-btn">Tạo tài khoản</button>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <p>Đã có tài khoản? <a onClick={loginClick} href="/" className="login-form-show">Đăng nhập ngay</a></p>
                                                        </div>
                                                    </div>
                                                </form>

                                                {/* <form action="/">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="contact-container">
                                                                <input type="email" placeholder="Địa Chỉ Email" />
                                                                <i className="fa fa-envelope" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="contact-container">
                                                                <input type="password" placeholder="Mật Khẩu" />
                                                                <i className="fa fa-eye" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 mb-15">
                                                            <input type="password" placeholder="Xác Nhận Mật Khẩu" />
                                                        </div>
                                                        <div className="col-sm-12 text-left mb-15">
                                                            <input type="checkbox" />
                                                            <p>Đồng Ý Với <span>Các Điều Khoản</span> Của Chúng Tôi</p>
                                                        </div>
                                                        <div className="col-sm-12 mb-20">
                                                            <button className="krishok-btn">Tạo Tài Khoản</button>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <p>Đã Có Tài Khoản? <a onClick={loginClick} href="/" className="login-form-show">Đăng Nhập Ngay</a></p>
                                                        </div>
                                                    </div>
                                                </form> */}
                                                <div onClick={closeClick} className="popup-close"><i className="fa fa-close" /></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}