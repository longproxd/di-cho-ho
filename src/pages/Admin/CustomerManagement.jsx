import axios from 'axios';
import { useState, useEffect } from 'react';

function CustomerManagement() {
    const [customers, setCustomers] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/khachhanglist")
      .then(res => {
        setCustomers(res.data)
      })
  }, [])

  customers && customers.map((customer) => {
    var row = document.getElementById("tbody").insertRow(0)
    row.insertCell(0).innerHTML = customer.id;
    row.insertCell(1).innerHTML = customer.cccd;
    row.insertCell(2).innerHTML = customer.ten;
    row.insertCell(3).innerHTML = customer.gioitinh;
    row.insertCell(4).innerHTML = customer.ngaysinh;
    row.insertCell(5).innerHTML = customer.diachi;
    row.insertCell(6).innerHTML = customer.sdt;
  })

  

    return (
        <div className="table-position">
            <div className='table-container stat'>
                <table id='table' className='table-uam'>
                    <thead>
                        <tr>
                            <th> Mã khách hàng </th>
                            <th> CMND/CCCD </th>
                            <th> Họ và tên </th>
                            <th> Giới tính </th>
                            <th> Ngày sinh </th>
                            <th> Địa chỉ </th>
                            <th> Số điện thoại </th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CustomerManagement;