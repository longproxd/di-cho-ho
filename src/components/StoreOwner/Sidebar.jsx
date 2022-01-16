import React, { useState } from 'react';

function Storeowner_Sidebar() {


    const [iconClassName1, setIconClassName1] = useState('fa fa-caret-down')

    function ManageButtonClicked() {
        var content = document.getElementById("manage-content")

        if (content.style.display === "block") {
            content.style.display = "none"
        }
        else {
            content.style.display = "block"
        }
        iconClassName1 === "fa fa-caret-down" ? setIconClassName1("fa fa-caret-up") : setIconClassName1("fa fa-caret-down")
    }
    return (
        <div>
            <div className="storeowner-sidenav">
                <a href="/admin-home"><i className="fa fa-fw fa-home"></i> Trang Chủ</a>
                <button onClick={ManageButtonClicked} className="storeowner-dropdown-btn"><i className="fa fa-fw fa-folder"></i> Quản Lý Hàng Hoá<i className={iconClassName1}></i></button>
                <div id="manage-content">
                    <a href="/storeowner/productmanagement/addproduct">Thêm Hàng Hoá</a>
                    <a href="/storeowner/productmanagement/editproduct">Sửa Thông Tin</a>
                    <a href="/storeowner/productmanagement/deleteproduct">Xoá Hàng Hoá</a>
                </div>
                <a href="#"><i className="fa fa-fw fa-motorcycle"></i> Vận Chuyển</a>
            </div>
        </div>
    );
}

export default Storeowner_Sidebar;