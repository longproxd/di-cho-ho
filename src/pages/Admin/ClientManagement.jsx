import Header from '../../components/Admin-Header';
// import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

import axios from 'axios';
import { useState, useEffect } from 'react';

function ClientManagement() {
  const [clients, setClients] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/doitac")
      .then(res => {
        setClients(res.data)
      })
  }, [])

  clients && clients.map((client) => {
    var row = document.getElementById("tbody").insertRow(0)
    row.insertCell(0).innerHTML = client.id;
    row.insertCell(1).innerHTML = client.tendoitac;
    row.insertCell(2).innerHTML = client.sdt;
    row.insertCell(3).innerHTML = client.cccd;
    row.insertCell(4).innerHTML = client.loaidoitac;
    row.insertCell(5).innerHTML = client.ngaythamgia;
    row.insertCell(6).innerHTML = client.soluongcuahang;
    row.insertCell(7).innerHTML = client.diachi;
    row.insertCell(8).innerHTML = client.trangthai;
  })

  return (
    <div>
      <Header />
      <div className='useraccount-content'>
        <Sidebar />
        <div className='useraccount-table'>
          <div className='table-interact'>
            <button>Thêm</button>
            <button>Xóa</button>
            <label for="user-type">Loại đối tác</label>
            <select id="user-type">
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
          </div>
          <div className='table-container'>
            <table id='table' className='table-uam'>
              <thead>
                <tr>
                  <th> ID </th>
                  <th> Tên Đối Tác </th>
                  <th> SĐT </th>
                  <th> CCCD </th>
                  <th> Loại Đối Tác </th>
                  <th> Ngày Tham Gia </th>
                  <th> Số Lượng Cửa Hàng </th>
                  <th> Địa Chỉ </th>
                  <th> Trạng Thái </th>
                </tr>
              </thead>
              <tbody id='tbody'>

              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default ClientManagement;
