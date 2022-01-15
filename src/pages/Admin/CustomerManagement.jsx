import axios from 'axios';
import { useState, useEffect } from 'react';

function CustomerManagement() {
    const [customers, setCustomers] = useState()
    const [idDel, setIdDel] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/khachhanglist")
      .then(res => {
        setCustomers(res.data)
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
          <Row key={item.id} uid={item.id} cccd={item.cccd} ten={item.ten} gioi_tinh={item.gioitinh}
          ngay_sinh={item.ngaysinh} dia_chi={item.diachi} sdt={item.sdt} />
        )}
      </tbody>
    )
  }

  //row component
  const Row = (props) => {
    const { key, uid, cccd, ten, gioi_tinh, ngay_sinh, dia_chi, sdt } = props;

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
        <td>{cccd}</td>
        <td>{ten}</td>
        <td>{gioi_tinh}</td>
        <td>{ngay_sinh}</td>
        <td>{dia_chi}</td>
        <td>{sdt}</td>
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
                            <th> Địa chỉ </th>
                            <th> Số điện thoại </th>
                        </tr>
                    </thead>
                    {customers && <TableBody data={customers} />}
                </table>
            </div>
        </div>
    );
}
export default CustomerManagement;