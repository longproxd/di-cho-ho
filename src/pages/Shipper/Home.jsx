import logo from '../../assets/img/logo.png';
import { useState, useEffect } from 'react'
import MenuItem from '../../components/MenuItem'
import Header from '../../components/Shipper/Header';
import Sidebar from '../../components/Shipper/Sidebar';
import Footer from '../../components/Shipper/Footer';
import Map from '../../components/Shipper/Map'

function ShipperHome(props) {
    const [accountarray, Setarray] = useState([])
    const {shipperAcc, setShipperAcc, setDonHangInfo} = props
    useEffect(() => {
        fetch('http://localhost:8080/api/shipper/lichsu/61c3d5ff0296576ff58de98f')
            .then(response => {
                return response.json();
            })
            .then(data => Setarray(data)).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Header shipperAcc={shipperAcc} setShipperAcc={setShipperAcc} />
            <div className='shipper-home'>
                {/* Page loader */}
                <div id="preloader" />

                {/* header area end */}

                {/*side bar start*/}
                <Sidebar />
                {/*side bar end*/}

                <div id="col-1">
                    <h3>Đơn hàng mới</h3>
                    {accountarray.length !== 0 ? accountarray.map((item) => {
                        return <MenuItem id={item.DonHang.madh} key={item.DonHang.madh} hinh_thuc_thanh_toan={item.DonHang.hinhthucthanhtoan}
                            tong_tien={item.DonHang.tongtien}
                            ma_shipper='abc'
                            dia_chi={item.DonHang.diachi}
                            tinh_trang={item.DonHang.tinhtrangdon}
                            ma_khach_hang={item.KhachHang.ten}
                            ma_cua_hang={item.CuaHang.tench} />
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
            <Footer />
        </div>

    );
}

export default ShipperHome