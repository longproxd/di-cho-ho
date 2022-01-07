import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header({ setAccountInfo }) {
    let navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(false)
    const [account, setAccount] = useState({
        sdt: "",
        cccd: "",
        diachi: "",
        ngaysinh: "",
        gioitinh: "",
        password: "",
        username: "",
        makhuvuc: "",
        ten: "",
    })

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

    function goToAccount(event) {
        event.preventDefault()

        navigate('/account')
    }

    function handleChange(event) {
        const value = event.target.value

        setAccount({
            ...account,
            [event.target.name]: value
        })
    }

    function Login(event) {
        event.preventDefault()

        axios.get('http://localhost:8080/api/login/' + account.username + '&' + account.password)
            .then(response => {
                if (response.status === 204) {
                    alert("Username hoặc password không đúng")
                }
                if (response.status === 200) {
                    setAccountInfo(response.data)
                    setIsLogin(true)

                    document.getElementById("login-form-popup").style.display = "none"
                    document.getElementById("regis-popup").style.display = "none"
                }
            })
            .catch(error => console.log(error));
    }

    function Regis(e) {
        e.preventDefault()

        axios.post("http://localhost:8080/api/customer/registeraccount", account)
            .then((response) => {
                if (response.status === 201) {
                    console.log(response);
                    alert("Đăng ký thành công")

                    document.getElementById("login-form-popup").style.display = "none"
                    document.getElementById("regis-popup").style.display = "none"
                }
            }, (error) => {
                alert("Username đã tồn tại")
            })
    }

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
                                {isLogin ? <a href="/" onClick={goToAccount}>
                                    {account.username}
                                </a> :
                                    <ul>
                                        <li><a href="/" onClick={signupClick}>Đăng Ký</a></li>
                                        <li><a href="/" onClick={loginClick} className="popup-show">Đăng Nhập</a>
                                            <div id="login-form-popup" className="login-popup login-form contact-form">
                                                <h4>Đăng Nhập</h4>
                                                <form action="/">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="contact-container">
                                                                <input name="username" value={account.username}
                                                                    type="text" placeholder="Tên đăng nhập"
                                                                    onChange={handleChange} />
                                                                <i className="fa fa-user" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 mb-15">
                                                            <div className="contact-container">
                                                                <input name="password" value={account.password}
                                                                    type="password" placeholder="Mật khẩu"
                                                                    onChange={handleChange} />
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
                                                            <button onClick={Login} className="krishok-btn">ĐĂNG NHẬP</button>
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
                                                                    <input name="username" value={account.username}
                                                                        autoComplete='off'
                                                                        type="text" placeholder="Tên đăng nhập"
                                                                        onChange={handleChange}
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
                                                                    <input name="password" value={account.password}
                                                                        type="password" placeholder="Mật khẩu"
                                                                        onChange={handleChange}
                                                                    />
                                                                    <i className="fa fa-eye" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 mb-15">
                                                                <input type="password" placeholder="Nhập lại mật khẩu" />
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="ten" value={account.ten}
                                                                        type="text" placeholder="Họ và tên"
                                                                        onChange={handleChange}
                                                                    />
                                                                    <i className="fa fa-file-text-o" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="gioitinh" value={account.gioitinh}
                                                                        placeholder="Giới tính" type="text"
                                                                        list='genders' onChange={handleChange} />
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
                                                                    <input name="ngaysinh" value={account.ngaysinh}
                                                                        type="date" placeholder="Ngày sinh"
                                                                        id="birth" onChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="sdt" value={account.sdt}
                                                                        type="text" placeholder="Số điện thoại"
                                                                        onChange={handleChange}
                                                                    />
                                                                    <i className="fa fa-phone" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="diachi" value={account.diachi}
                                                                        type="text" placeholder="Địa chỉ"
                                                                        onChange={handleChange}
                                                                    />
                                                                    <i className="fa fa-home" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="contact-container">
                                                                    <input name="cccd" value={account.cccd}
                                                                        type="text" placeholder="Số CMND/CCCD"
                                                                        onChange={handleChange}
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
                                                            <button onClick={Regis} className="krishok-btn">Tạo tài khoản</button>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <p>Đã có tài khoản? <a onClick={loginClick} href="/" className="login-form-show">Đăng nhập ngay</a></p>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div onClick={closeClick} className="popup-close"><i className="fa fa-close" /></div>
                                            </div>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )

}

export default Header;