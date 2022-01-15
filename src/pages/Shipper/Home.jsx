import logo from '../../assets/img/logo.png';
import { useState, useEffect } from 'react'
import MenuItem from '../../components/MenuItem'
import Header from '../../components/Shipper/Header';
// import Footer from '../../components/Footer';
import Map from '../../components/Shipper/Map'

function ShipperHome() {
    const [accountarray, Setarray] = useState([])
    useEffect(() => {
        fetch('https://localhost:8001/api/donhang')
            .then(response => {
                return response.json();
            })
            .then(data => Setarray(data)).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Header />
            <div className='shipper-home'>
                {/* Page loader */}
                <div id="preloader" />
                
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
                    {accountarray.length !== 0 ? accountarray.map((item) => {
                        return <MenuItem id={item.madh} hinh_thuc_thanh_toan={item.hinhthucthanhtoan}
                            tong_tien={item.tongtien}
                            ma_shipper={item.mashipper}
                            dia_chi={item.dia_chi}
                            tinh_trang={item.tinhtrang}
                            ma_khach_hang={item.makhg}
                            ma_cua_hang={item.mach} />
                    }) : <div>No item available</div>
                    }
                </div>
                <div id="col-2">
                    <h3>Bản đồ khi click vào một đơn hàng</h3>
                    <Map />
                </div>
            </div>
            {/* footer area start */}
            
            {/* footer area end */}
            {/* <Footer /> */}
        </div>

    );
}

export default ShipperHome