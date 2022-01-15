import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

import axios from 'axios';
import { useState, useEffect } from 'react';

function ClientManagement() {
  const [clients, setClients] = useState()
  const [idDel, setIdDel] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/doitac")
      .then(res => {
        setClients(res.data)
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
          <Row key={item.id} uid={item.id} ten={item.tendoitac} sdt={item.sdt} cccd={item.cccd}
                loai={item.loaidoitac} ngay={item.ngaythamgia} so_luong={item.soluongcuahang}
                dia_chi={item.diachi} trang_thai={item.trangthai} />
        )}
      </tbody>
    )
  }

  //row component
  const Row = (props) => {
    const { key, uid, ten, sdt, cccd, loai, ngay, so_luong, dia_chi, trang_thai } = props;

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
        <td>{sdt}</td>
        <td>{cccd}</td>
        <td>{loai}</td>
        <td>{ngay}</td>
        <td>{so_luong}</td>
        <td>{dia_chi}</td>
        <td>{trang_thai}</td>
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
              {clients && <TableBody data={clients} />}
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ClientManagement;
