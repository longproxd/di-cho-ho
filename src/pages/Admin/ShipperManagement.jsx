import axios from 'axios';
import { useState, useEffect } from 'react';

function ShipperManagement(props) {
  const [shippers, setShippers] = useState()
  const setIdDel = props.setIdDel

  useEffect(() => {
    axios.get("http://localhost:8080/api/thongkekhuvucshipper")
      .then(res => {
        setShippers(res.data)
      })
  }, [])

  //table component
  const TableBody = (props) => {
    return (
      <tbody>
        {props.data.DuLieu.map(items =>
          items && items.Shipper.map(item =>
            <Row key={item.id} uid={item.id} cccd={item.cccd} ten={item.ten} gioi_tinh={item.gioitinh}
              ngay_sinh={item.ngaysinh} dia_chi={item.diachi} sdt={item.sdt} vung={items.KhuVuc.phan_vung}
              khu_vuc_hoat_dong={item.khuvucgiaohang} trang_thai_tiem_chung={item.trangthaitiemchung} />
          )
        )}
      </tbody>
    )
  }

  //row component
  const Row = (props) => {
    const { uid, cccd, ten, gioi_tinh, ngay_sinh, dia_chi, sdt, vung, khu_vuc_hoat_dong,
      trang_thai_tiem_chung } = props;

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
        <td>{dia_chi}</td>
        <td>{sdt}</td>
        <td>{trang_thai_tiem_chung}</td>
        <td>{khu_vuc_hoat_dong}</td>
        <td>{vung}</td>
      </tr>
    )
  }

  return (
    <div>
      <div className='table-container stat'>
        <table id='table' className='table-uam'>
          <thead>
            <tr>
              <th> Mã nhân viên </th>
              <th> CMND/CCCD </th>
              <th> Họ và tên </th>
              <th> Giới tính </th>
              <th> Ngày sinh </th>
              <th> Địa chỉ </th>
              <th> Số điện thoại </th>
              <th> Trạng thái tiêm chủng </th>
              <th> Khu vực hoạt động </th>
              <th> Phân vùng </th>
            </tr>
          </thead>
          {shippers && <TableBody data={shippers} />}
        </table>
      </div>
    </div>
  );
}
export default ShipperManagement;