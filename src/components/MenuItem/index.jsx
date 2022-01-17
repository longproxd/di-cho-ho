import React from 'react'
import { useNavigate } from "react-router-dom";


const MenuItem = (props) => {
    const { id, hinh_thuc_thanh_toan, tong_tien, ma_shipper, dia_chi, tinh_trang,
        ma_khach_hang, ma_cua_hang, sdt, dia_chi_ch, setDonHangInfo } = props

    const navigate = useNavigate();

    function toDetails() {
        navigate('/shipper/orderdetail')

        const donhang = { 
            id: id,
            hinh_thuc_thanh_toan: hinh_thuc_thanh_toan,
            tong_tien: tong_tien,
            dia_chi: dia_chi,
            ten_khach_hang: ma_khach_hang,
            ten_cua_hang: ma_cua_hang,
            sdt: sdt,
            dia_chi_ch: dia_chi_ch
        }

        setDonHangInfo(donhang)

    }

    return (
        <div className='menu-item'>
            <div className='menu-item__id'>
                {id}
            </div>
            <div className='menu-item__container'>
                <div className='menu-item__container--item-1 overflown--hiden'>{hinh_thuc_thanh_toan}</div>
                <div className='menu-item__container--item-2 overflown--hiden'>{tong_tien}</div>
                <div className='menu-item__container--item-3 overflown--hiden'>{ma_shipper}</div>
                <div className='menu-item__container--item-4 overflown--hiden'>{dia_chi}</div>
                <div className='menu-item__container--item-5 overflown--hiden'>{tinh_trang}</div>
                <div className='menu-item__container--item-6 overflown--hiden'>{ma_khach_hang}</div>
                <div className='menu-item__container--item-7 overflown--hiden'>{ma_cua_hang}</div>

            </div>
            <button onClick={toDetails} className='orderdetail-link'
                style={{ color: "green" }}
            >Chi tiết đơn hàng</button>
        </div>)
}

export default MenuItem