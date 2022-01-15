import style from './style.module.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

function StoreManagement() {
  const [stores, setStores] = useState()
  const [idDel, setIdDel] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/cuahang")
      .then(res => {
        setStores(res.data)
      })
  }, [])

  function del() {
    axios.delete('http://localhost:8080/api/doitac/xoa/' + idDel)
  }

  //table component
  const TableBody = (props) => {

    return (
      <tbody>
        {props.data.map(item =>
          <Row key={item.mach} uid={item.mach} ten={item.tench} dia_chi={item.diachi} sdt={item.sdt} />
        )}
      </tbody>
    )
  }

  //row component
  const Row = (props) => {
    const { key, uid, ten, dia_chi, sdt } = props;

    function RowClick(event) {
      if(event.target.style.background === 'white' || event.target.style.background === '')
      {
        event.target.style.background = 'lightblue'
      }
      else
      {
        event.target.style.background = 'white'
      }
    }

    return (
      <tr key={key} onClick={RowClick}>
        <td>{uid}</td>
        <td>{ten}</td>
        <td>{dia_chi}</td>
        <td>{sdt}</td>
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
                  <th> Địa chỉ </th>
                  <th> Số điện thoại </th>                
                </tr>
              </thead>
              {stores && <TableBody data={stores} />}
            </table>
          </div>
    </div>
  );
}
export default StoreManagement;
