import Layout from './Layout/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RegistrationApproval() {

  const url = 'https://localhost:8001/api/doitac';
  const [DoiTac, setDoiTac] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        const doiTacTrangThai = res.data.filter(doiTac => doiTac.trang_thai === "");
        setDoiTac(doiTacTrangThai);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <div className='table-container stat'>
        <button id="green">Phê duyệt</button>
        <button id="red">Từ chối</button>
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

          {DoiTac.map((DoiTac) => (
            <tbody id='tbody'>
              <tr>
                <td>{DoiTac.Id}</td>
                <td>{DoiTac.ten_doi_tac}</td>
                <td>{DoiTac.sdt}</td>
                <td>{DoiTac.cccd}</td>
                <td>{DoiTac.loai_doi_tac}</td>
                <td>{DoiTac.ngay_tham_gia}</td>
                <td>{DoiTac.so_luong_cua_hang}</td>
                <td>{DoiTac.dia_chi}</td>
                <td>{DoiTac.trang_thai}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Layout>
  );
}
export default RegistrationApproval;
