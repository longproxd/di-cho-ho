import React, {useState} from 'react';

function Sidebar(){

    
    const [iconClassName1, setIconClassName1] = useState('fa fa-caret-down')

    function ManageButtonClicked() {
        var content = document.getElementById("manage-content")

        if(content.style.display === "block")
        {
            content.style.display = "none"
        }
        else
        {
            content.style.display = "block"
        }

        iconClassName1 ===  "fa fa-caret-down" ? setIconClassName1("fa fa-caret-up") : setIconClassName1("fa fa-caret-down")
    }

    function StatisticButtonClicked() {
        var content = document.getElementById("statistic-content")

        if(content.style.display === "block")
        {
            content.style.display = "none"
        }
        else
        {
            content.style.display = "block"
        }
    }

    return (
        <div>
            <div class="admin-sidenav">
                <a href="/admin-home"><i class="fa fa-fw fa-home"></i> Trang Chủ</a>
                <button onClick={ManageButtonClicked} class="admin-dropdown-btn"><i class="fa fa-fw fa-folder"></i> Quản Lý <i class={iconClassName1}></i></button>
                <div id="manage-content">
                    <a href="/admin/management/useraccount">Quản Lý Tài Khoản Người Dùng</a>
                    <a href="/admin/management/client">Quản Lý Đối Tác</a>
                    <a href="/admin/management/order">Quản Lý Đơn Hàng</a>
                </div>
                <button onClick={StatisticButtonClicked} class="admin-dropdown-btn"><i class="fa fa-fw fa-line-chart"></i> Thống Kê <i class="fa fa-caret-down"></i></button>
                <div id="statistic-content">
                    <a href="/admin/statistic/customer">Khách Hàng</a>
                    <a href="/admin/statistic/shipper">Shipper</a>
                    <a href="/admin/statistic/store">Cửa Hàng</a>
                    <a href="/admin/statistic/essentialproducts">Mặt Hàng Thiết Yếu</a>
                    <a href="/admin/statistic/citizendemand">Nhu Cầu Thực Phẩm</a>
                </div>
                <a href="/admin/registration_approval"><i class="fa fa-fw fa-check-square"></i> Xét Duyệt Đăng Ký Bán Hàng</a>
                <a href="/admin/commitment"><i class="fa fa-fw fa-money"></i> Tiền Hoa Hồng</a>
            </div>
        </div>
    );
}

export default Sidebar;