import axios from 'axios';
import { useState, useEffect } from 'react';

function CustomerManagement(props) {
  const [customers, setCustomers] = useState()
  const setIdDel = props.setIdDel

  useEffect(() => {
    axios.get("http://localhost:8080/api/thongkekhuvuckhachhang")
      .then(res => {
        setCustomers(res.data)
      })
  }, [])

  //table component
  const TableBody = (props) => {
    return (
      <tbody>
        {props.data.DuLieu.map(items =>
          items.KhachHang && items.KhachHang.map(item =>
            <Row key={item.id} uid={item.id} cccd={item.cccd} ten={item.ten} gioi_tinh={item.gioitinh}
              ngay_sinh={item.ngaysinh} sdt={item.sdt} dia_chi={item.diachi} vung={items.KhuVuc.phan_vung} />
          )
        )}
      </tbody>
    )
  }

  //row component
  const Row = (props) => {
    const { uid, cccd, ten, gioi_tinh, ngay_sinh, dia_chi, sdt, vung } = props;

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
        <td>{cccd}</td>
        <td>{ten}</td>
        <td>{gioi_tinh}</td>
        <td>{ngay_sinh}</td>
        <td>{sdt}</td>
        <td>{dia_chi}</td>
        <td>{vung}</td>
      </tr>
    )
  }

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
              <th> Số điện thoại </th>
              <th> Địa chỉ </th>
              <th> Phân vùng </th>
            </tr>
          </thead>
          {customers && <TableBody data={customers} />}
        </table>
      </div>
    </div>
  );
}
export default CustomerManagement;