import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

import axios from 'axios';
import { useState, useEffect } from 'react';

function UserAccountManagement() {
  const [total, setTotal] = useState()
  const [infoDel, setInfoDel] = useState({
    id: '',
    type: ''
  })

  useEffect(() => {
    axios.get("http://localhost:8080/api/quanlytaikhoan")
      .then(res => setTotal(res.data))
  }, [])

  function del() {
    if (infoDel.type === 'Khách mua hàng') {
      axios.delete('http://localhost:8080/api/xoa/' + infoDel.id)
    }

    if (infoDel.type === 'Shipper') {
      axios.delete('http://localhost:8080/api/shipper/del/' + infoDel.id)
    }

    if (infoDel.type === 'Chủ cửa hàng') {
      axios.delete('http://localhost:8080/api/cuahang/xoa/' + infoDel.id)
    }
  }

  //table component
  const TableBody = (props) => {

    return (
      <tbody>
        {props.data.CuaHang.map(item =>
          <Row key={item.mach} uid={item.mach} user={item.username} type='Chủ cửa hàng' />
        )}
        {props.data.KhachHang.map(item =>
          <Row key={item.id} uid={item.id} user={item.username} type='Khách mua hàng' />
        )}
        {props.data.Shipper.map(item =>
          <Row key={item.id} user={item.username} type='Shipper' />
        )}
      </tbody>
    )
  }

  //row component
  const Row = (props) => {
    const { uid, user, type } = props;

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
      <tr key={uid} onClick={RowClick}>
        <td>{uid}</td>
        <td>{user}</td>
        <td>{type}</td>
      </tr>
    )
  }

  return (
    <div>

      <Header />
      <div className='useraccount-content'>
        <Sidebar />
        <div className='useraccount-table'>
          <div className='table-interact'>
            <button onClick={del}>Xóa</button>
            <label htmlFor="user-type">Loại người dùng</label>
            <select id="user-type">
              <option>Khách mua hàng</option>
              <option>Shipper</option>
              <option>Chủ cửa hàng</option>
            </select>
          </div>
          <div className='table-container'>
            <table id='table' className='table-uam'>
              <thead>
                <tr>
                  <th> ID </th>
                  <th> Username </th>
                  <th> Loại Tài Khoản </th>
                </tr>
              </thead>
              {total && <TableBody data={total} />}
            </table>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
export default UserAccountManagement;