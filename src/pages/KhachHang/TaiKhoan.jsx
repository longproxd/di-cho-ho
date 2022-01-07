

function TaiKhoan({ accountInfo }) {
    return (
        <div>
            <div>Tên: {accountInfo.ten}</div>
            <div>Giới tính: {accountInfo.gioitinh}</div>
            <div>Ngày sinh: {accountInfo.ngaysinh}</div>
            <div>Số điện thoại: {accountInfo.sdt}</div>
            <div>Số CMND/CCCD: {accountInfo.cccd}</div>
            <div>Địa chỉ: {accountInfo.diachi}</div>
            <div>Màu khu vực: Xanh</div>
        </div>
    )
}

export default TaiKhoan;