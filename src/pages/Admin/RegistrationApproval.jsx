import Layout from './Layout/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RegistrationApproval() {
  const url = 'https://localhost:8001/api/doitac';
  const [DoiTac, setDoiTac] = useState([]);
  const [rowClicked, setRowClicked] = useState();

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

  function RowClick(rowValue) {
    setRowClicked(rowValue)
  }

  function Approve(e) {
    e.preventDefault();

    const updateRow = {
      cccd: rowClicked.cccd,
      dia_chi: rowClicked.dia_chi,
      loai_doi_tac: rowClicked.loai_doi_tac,
      ngay_tham_gia: rowClicked.ngay_tham_gia,
      sdt: rowClicked.sdt,
      so_luong_cua_hang: rowClicked.so_luong_cua_hang,
      ten_doi_tac: rowClicked.ten_doi_tac,
      trang_thai: "Đã Được Phê Duyệt"
    }

    axios.put('https://localhost:8001/api/doitac/' + rowClicked.Id, updateRow)
      .then(res => {
        if (res.status === 204) {
          alert('Hoàn tất')
        }
      })
      .catch(error => alert(error));
  }

  function Reject(e) {
    e.preventDefault()

    axios.delete('https://localhost:8001/api/doitac/' + rowClicked.Id)
      .then((res) => {
        if (res.status === 204) {
          alert('Hoàn tất')
        }
      })
      .catch(error => alert(error));
  }

  return (
    <Layout>
      <div className='table-container stat'>
        <button onClick={Approve} id="green">Phê duyệt</button>
        <button onClick={Reject} id="red">Từ chối</button>
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

          <tbody id='tbody'>
            {DoiTac.map((doitac) => (
              <tr key={doitac.Id} onClick={() => RowClick(doitac)}>
                <td>{doitac.Id}</td>
                <td>{doitac.ten_doi_tac}</td>
                <td>{doitac.sdt}</td>
                <td>{doitac.cccd}</td>
                <td>{doitac.loai_doi_tac}</td>
                <td>{doitac.ngay_tham_gia}</td>
                <td>{doitac.so_luong_cua_hang}</td>
                <td>{doitac.dia_chi}</td>
                <td>{doitac.trang_thai}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Layout>
  );
}
export default RegistrationApproval;
