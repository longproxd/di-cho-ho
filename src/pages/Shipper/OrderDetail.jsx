import Header from '../../components/Shipper/Header';
import Sidebar from '../../components/Shipper/Sidebar';
import Footer from '../../components/Shipper/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function OrderDetail(props) {
    const [chitiethang, setChitiethang] = useState()
    const {shipperAcc, setShipperAcc, donHangInfo} = props
    const [accept, setAccept] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/api/dhmh/' + (donHangInfo && donHangInfo.id))
            .then(res => setChitiethang(res.data))
    })

    function AcceptOrder()
    {
        setAccept(true)
    }

    return (
        <div>
            <Header shipperAcc={shipperAcc} setShipperAcc={setShipperAcc} />
            <div id="preloader" />
            {/* header area start */}
            {/* header area end */}

            {/*side bar start*/}
            <div className='order-detail'>
                <Sidebar />
                {/*side bar end*/}
                <div className='orderdetail-content'>
                    <h2>Chi tiết đơn hàng</h2>
                    {accept ? <h3 id="tienhanh">Đang tiến hành</h3>: null}
                    {donHangInfo && <div className='order-info'>
                        <h4>Giao tới {donHangInfo.dia_chi}</h4>
                        <p>{donHangInfo.ten_khach_hang} {donHangInfo.sdt}</p>
                        <input type="text" placeholder='Ghi chú' />
                        <h3>Đơn hàng</h3>
                        <h3>{donHangInfo.ten_cua_hang}</h3>
                        <p>{donHangInfo.dia_chi_ch}</p>
                        {chitiethang && chitiethang.map(chitiet =>
                            <div key={chitiet.ChiTietDonMatHang.id}>
                                <div className="row cart-product detail">
                                    <div className="cart-product-img">
                                        <img src={chitiet.MatHang.hinhanh} />
                                    </div>
                                    <div className="col cart-product-left">
                                        <h5>{chitiet.MatHang.ten}</h5>
                                        <h5>DVT: {chitiet.MatHang.khoiluong} kg</h5>
                                    </div>
                                    <div className="row cart-product-right goleft">
                                        <h5
                                            className="singleitem-price">
                                            {chitiet.MatHang.gia.toLocaleString()}₫
                                        </h5>
                                        <div className="cart-quantity-box">
                                            <input readOnly className="quantity-box" value={chitiet.ChiTietDonMatHang.soluong} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <p>Phí vận chuyển: 23,000đ</p>
                        <h3>Tổng tiền: 33,500đ</h3>
                        <h3>Hình thức thanh toán: {donHangInfo.hinh_thuc_thanh_toan}</h3>
                    </div>}
                    {accept ? <div>
                        <button id="button-accept-order">Hoàn tất</button>
                        <button id="button-accept-order">Hủy</button>
                        </div> 
                    : 
                    <button onClick={AcceptOrder} id="button-accept-order">Chấp Nhận</button>}
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default OrderDetail