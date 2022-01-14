import axios from 'axios';
import { useState, useEffect } from 'react';

function ShipperManagement() {
  const [shippers, setShippers] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/shipper/list")
      .then(res => {
        setShippers(res.data)
      })
  }, [])

  shippers && shippers.map((shipper) => {
    var row = document.getElementById("tbody").insertRow(0)
    row.insertCell(0).innerHTML = shipper.id;
    row.insertCell(1).innerHTML = shipper.cccd;
    row.insertCell(2).innerHTML = shipper.ten;
    row.insertCell(3).innerHTML = shipper.gioitinh;
    row.insertCell(4).innerHTML = shipper.ngaysinh;
    row.insertCell(5).innerHTML = shipper.diachi;
    row.insertCell(6).innerHTML = shipper.sdt;
    row.insertCell(7).innerHTML = shipper.khuvucgiaohang;
    row.insertCell(8).innerHTML = shipper.trangthaitiemchung;
  })

    return (
        <div>
            <div className='table-container stat'>
            <table id='table' className='table-uam'>
              <thead>
                <tr>
                  <th> Mã nhân viên </th>
                  <th> CMND/CCCD </th>
                  <th> Họ và tên </th>
                  <th> Giới tính </th>
                  <th> Ngày sinh </th>                 
                  <th> Địa chỉ </th>
                  <th> Số điện thoại </th>
                  <th> Khu vực hoạt động </th>                 
                  <th> Trạng thái tiêm chủng </th>
                </tr>
              </thead>
              <tbody id='tbody'>
                
              </tbody>
            </table>
          </div>
      </div>
    );
}
export default ShipperManagement;