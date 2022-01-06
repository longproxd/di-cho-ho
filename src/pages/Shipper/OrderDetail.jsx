import logo from '../../assets/img/logo.png';
import Header from '../../components/KhachHang/Header';
import Footer from '../../components/KhachHang/Footer';

function OrderDetail() {
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
            <Header/>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header > {/* header area end */}
            
            {/*side bar start*/}
            <div className='order-detail'>


                <div class="shipper-sidenav">
                    <a href="#trangchushipper"><i class="fa fa-fw fa-home"></i> Trang Chủ</a>
                    <a href="#lichsugiaohang"><i class="fa fa-fw fa-calendar-o"></i> Lịch Sử Giao Hàng</a>
                    <a href="#taikhoanshipper"><i class="fa fa-fw fa-user"></i> Tài Khoản</a>
                </div>
                {/*side bar end*/}

                <div className='orderdetail-content'>
                    <h2>Chi tiết đơn hàng</h2>
                    <button id="button-accept-order">Chấp Nhận</button>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default OrderDetail