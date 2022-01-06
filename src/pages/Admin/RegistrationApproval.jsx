import Layout from './Layout/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

const EXAMPLE_DATA = [
  { item1: 'item1', item2: 'item2', item3: 'item3', selected: false },
];

function RegistrationApproval() {
  //   const data = [{ item1: 'item1', item2: 'item2', item3: 'item3', selected: false }];

  // const [data, setData] = useState(EXAMPLE_DATA)

  // const handleSelectRow = (index) => {

  //     let newArray = [...data];
  //     newArray[index]['selected'] = !newArray[index]['selected']
  //   setData(newArray)
  // };
  // b1: Tao URL

  const url = 'http://localhost:8080/api/doitac';
  const [DoiTac, setDoiTac] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setDoiTac(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const navigate = useNavigate();
  // function handleClick() {
  //   navigate('/combo');
  // }

  return (
    <Layout>
      <div className='table-container stat'>
        <table id='table' className='table-uam'>
          <thead>
            <tr>
              <th> Mã DT </th>
              <th> SDT </th>
              <th> CCCD </th>
              <th> DiaChi </th>
              <th> Loai Doi Tac </th>
              <th> Ngay Tham Gia </th>
              <th> So Luong Cua Hang </th>
              <th> Trang Thai </th>
            </tr>
          </thead>

          {DoiTac.map((DoiTac) => (
            <tbody id='tbody'>
              <tr>
                <td>{DoiTac.mach}</td>
                <td>{DoiTac.tench}</td>
                <td>{DoiTac.sdt}</td>
                <td>{DoiTac.diachi}</td>
                <td>{DoiTac.hinhanh}</td>
                <td>{DoiTac.makv}</td>
                <td>{DoiTac.madt}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Layout>
  );
}
export default RegistrationApproval;
