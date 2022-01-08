import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

import axios from 'axios';
import { useState, useEffect } from 'react';

function OrderManagement() {
  const [orders, setOrders] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/tatcadon")
      .then(res => {
        setOrders(res.data)
      })
  }, [])

  orders && orders.map((order) => {
    var row = document.getElementById("tbody").insertRow(0)
    row.insertCell(0).innerHTML = order["DonHang"].madh;
    row.insertCell(1).innerHTML = order["DonHang"].hinhthucthanhtoan;
    row.insertCell(2).innerHTML = order["DonHang"].tongtien;
    if(!order["Shipper"])
    {
      row.insertCell(3).innerHTML = "";
    }
    else
    {
      row.insertCell(3).innerHTML = order["Shipper"].ten;
    }
    row.insertCell(4).innerHTML = order["DonHang"].diachi;
    row.insertCell(5).innerHTML = order["DonHang"].tinhtrangdon;
    row.insertCell(6).innerHTML = order["KhachHang"].ten;
    row.insertCell(7).innerHTML = order["CuaHang"].tench;
  })

  return (
    <div>
      <Header />
      <div className='useraccount-content'>
        <Sidebar />
        <div className='useraccount-table'>
          <div className='table-container'>
            <table id='table' className='table-uam'>
              <thead>
                <tr>
                  <th> ID </th>
                  <th> Hình Thức Thanh Toán </th>
                  <th> Tổng Tiền </th>
                  <th> Shipper </th>
                  <th> Địa Chỉ Giao Hàng </th>
                  <th> Tình Trạng Đơn </th>
                  <th> Khách Hàng </th>
                  <th> Cửa Hàng </th>
                </tr>
              </thead>
              <tbody id='tbody'>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default OrderManagement;
