import React from 'react';
import logo from '../../assets/img/logo.png';

export default function Shipper_Sidebar() {
    return (
        <div class="shipper-sidenav">
            <a href="/shipper"><i class="fa fa-fw fa-home"></i> Trang Chủ</a>
            <a href="/shipper/history"><i class="fa fa-fw fa-calendar-o"></i> Lịch Sử Giao Hàng</a>
            <a href="#"><i class="fa fa-fw fa-user"></i> Tài Khoản</a>
        </div>
    );
}