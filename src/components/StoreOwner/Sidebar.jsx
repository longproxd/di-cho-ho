import React, {useState} from 'react';

function Storeowner_Sidebar(){

    
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
    return (
        <div>
            <div class="storeowner-sidenav">
                <a href="/admin-home"><i class="fa fa-fw fa-home"></i> Trang Chủ</a>
                <button onClick={ManageButtonClicked} class="storeowner-dropdown-btn"><i class="fa fa-fw fa-folder"></i> Quản Lý Hàng Hoá<i class={iconClassName1}></i></button>
                <div id="manage-content">
                    <a href="#">Thêm Hàng Hoá</a>
                    <a href="#">Sửa Thông Tin</a>
                    <a href="#">Xoá Hàng Hoá</a>
                </div>
                <a href="#"><i class="fa fa-fw fa-motorcycle"></i> Vận Chuyển</a>
            </div>
        </div>
    );
}

export default Storeowner_Sidebar;