import style from './style.module.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

function StoreManagement() {
  const [stores, setStores] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/doitac")
      .then(res => {
        setStores(res.data)
      })
  }, [])

  stores && stores.map((store) => {
    var row = document.getElementById("tbody").insertRow(0)
    row.insertCell(0).innerHTML = store.mach;
    row.insertCell(1).innerHTML = store.tench;
    row.insertCell(2).innerHTML = store.diachi;
    row.insertCell(3).innerHTML = store.sdt;
  })

  return (
    <div className={style.store_management__container}>
      {/*<div className={style.store_management__screen_1}>Screen 1</div>
      <div className={style.store_management__screen_2}>Screen 2</div>*/}
      <div className='table-container stat'>
            <table id='table' className='table-uam'>
              <thead>
                <tr>
                  <th> Mã cửa hàng </th>
                  <th> Tên cửa hàng </th>              
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
export default StoreManagement;
