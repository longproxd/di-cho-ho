import style from './style.module.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

function StoreManagement(props) {
  const [stores, setStores] = useState()
  const setIdDel = props.setIdDel

  useEffect(() => {
    axios.get("http://localhost:8080/api/thongkekhuvuccuahang")
      .then(res => {
        setStores(res.data)
      })
  }, [])

  //table component
  const TableBody = (props) => {
    return (
      <tbody>
        {props.data.DuLieu.map(items =>
          items.CuaHang && items.CuaHang.map(item =>
            <Row key={item.mach} uid={item.mach} ten={item.tench} dia_chi={item.diachi} sdt={item.sdt}
              vung={items.KhuVuc.phan_vung} />
          )
        )}
      </tbody>
    )
  }

  //row component
  const Row = (props) => {
    const { uid, ten, dia_chi, sdt, vung } = props;

    function RowClick(event) {
      if (event.target.style.background === 'white' || event.target.style.background === '') {
        event.target.style.background = 'lightblue'

        setIdDel(event.target.innerHTML)
      }
      else {
        event.target.style.background = 'white'
      }
    }

    return (
      <tr key={uid} onClick={RowClick}>
        <td>{uid}</td>
        <td>{ten}</td>
        <td>{sdt}</td>
        <td>{dia_chi}</td>
        <td>{vung}</td>
      </tr>
    )
  }

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
              <th> Số điện thoại </th>
              <th> Địa chỉ </th>
              <th> Vùng </th>
            </tr>
          </thead>
          {stores && <TableBody data={stores} />}
        </table>
      </div>
    </div>
  );
}
export default StoreManagement;
