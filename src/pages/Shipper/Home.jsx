import logo from '../../assets/img/logo.png';
import { useState, useEffect } from 'react'
import MenuItem from '../../components/MenuItem'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ShipperHome() {
    // const [accountarray, Setarray] = useState([
    //     {"_id":{"$oid":"61c3eb590296576ff58de999"},
    //     "hinh_thuc_thanh_toan":"Tiền Mặt",
    //     "tong_tien": {"$numberDouble":"42000.0"},
    //     "ma_shipper":"61c3d5ff0296576ff58de98f",
    //     "dia_chi":"223 Phan Văn Trị, P7, Gò Vấp TPHCM",
    //     "tinh_trang":"Đang Được Vận Chuyển",
    //     "ma_khach_hang":"61c1997c09e63a5a4334aa98",
    //     "ma_cua_hang":"61b3279c05b5df2e92092c7c"}, 
    //     {"_id":{"$oid":"61c3ebd80296576ff58de99a"},
    //     "hinh_thuc_thanh_toan":"ATM/Internet Banking",
    //     "tong_tien":{"$numberDouble":"31000.0"},
    //     "ma_shipper":"",
    //     "dia_chi":"42 Bạch Đằng, Phường 14, Bình Thạnh, TPHCM",
    //     "tinh_trang":"Đang Được Xử Lý",
    //     "ma_khach_hang":"61c19b0209e63a5a4334aa9a",
    //     "ma_cua_hang":"61b374f88dda3d67ad7c80a6"}])
    const [accountarray, Setarray] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/api/donhang')
            .then(response => {
                return response.json();
            })
            .then(data => Setarray(data)).catch(error=>console.log(error))
    }, [])

    // accountarray && accountarray.map((account) => {
    //     var row = document.getElementById("tbody").insertRow(0)
    //     row.insertCell(0).innerHTML = account.taikhoanid;
    //     row.insertCell(1).innerHTML = account.username;
    //     row.insertCell(2).innerHTML = account.password;
    //     row.insertCell(3).innerHTML = account.loaiTaiKhoan;
    // })

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
            <Header />
            <div className='shipper-home'>

            
            {/* Page loader */}
            <div id="preloader" />
            {/* header area start */}
            {/* <header className="header-area ptb-15">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="header-left-content">
                                <ul>
                                    <li><a href="/"><img className='logo-img' src={logo} alt="logo" /></a></li>
                                    <li><a href="#"><i className="fa fa-phone" />0123 4567 8913</a></li>
                                    <li><a href="#"><i className="fa fa-envelope" />example@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="header-right-content">
                                <ul>
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
            </header >  */}
            {/* header area end */}

            {/*side bar start*/}
            <div class="shipper-sidenav">
                <a href="#trangchushipper"><i class="fa fa-fw fa-home"></i> Trang Chủ</a>
                <a href="#lichsugiaohang"><i class="fa fa-fw fa-calendar-o"></i> Lịch Sử Giao Hàng</a>
                <a href="#taikhoanshipper"><i class="fa fa-fw fa-user"></i> Tài Khoản</a>
            </div>
            {/*side bar end*/}

            <div id="col-1">
                <h3>Đơn hàng mới</h3>
                {/* <div className="order-info">
                    <h4> Mã Đơn</h4>
                    <h4> Địa chỉ</h4>
                    <h4> Tổng Tiền</h4>
                    <a className='orderdetail-link'> Chi Tiết Đơn Hàng</a>
                </div> */}
                {accountarray.length !== 0 ? accountarray.map((item)=>{
                    return <MenuItem id={item.madh} hinh_thuc_thanh_toan={item.hinhthucthanhtoan} 
                    tong_tien={item.tongtien} 
                    ma_shipper={item.mashipper} 
                    dia_chi={item.dia_chi} 
                    tinh_trang={item.tinhtrang} 
                    ma_khach_hang={item.makhg} 
                    ma_cua_hang={item.mach} />}) : <div>No item available</div>
                }
                {/* <div className="order-info">
                    <h4> Mã Đơn</h4>
                    <h4> Địa chỉ</h4>
                    <h4> Tổng Tiền</h4>
                    <a className='orderdetail-link'> Chi Tiết Đơn Hàng</a>
                </div> */}
            </div>
            <div id="col-2">
                <h3>Bản đồ khi click vào một đơn hàng</h3>
            </div>
            </div>
            {/* footer area start */}
            {/* <div class="system-footer">
                <p>Hệ thống đi chợ thuê - bản quyền thuộc nhóm phát triển R7</p>
            </div> */}
            {/* footer area end */}
            <Footer />
        </div>

    );
}

export default ShipperHome