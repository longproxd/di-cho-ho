import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

import axios from 'axios';
import { useState, useEffect } from 'react';

function EssentialProducts() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/thongkemathangthietyeu').then((res) => {
      setOrders(res.data);
    });
  }, []);

  orders &&
    orders.map((order) => {
      var row = document.getElementById('tbody').insertRow(0);
      row.insertCell(0).innerHTML = order.TenMatHang;
      row.insertCell(1).innerHTML = order.SoLuong;
    });

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
                  <th> Tên Mặt Hàng </th>
                  <th> Số Lượng </th>
                </tr>
              </thead>
              <tbody id='tbody'></tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EssentialProducts;
