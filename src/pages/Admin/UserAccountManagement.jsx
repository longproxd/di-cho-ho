import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

import axios from 'axios';
import { useState, useEffect } from 'react';

function UserAccountManagement() {
  const [total, setTotal] = useState({})
  const [infoDel, setInfoDel] = useState({
    id: '',
    type: ''
  })

  useEffect(() => {
    axios.get("http://localhost:8080/api/quanlytaikhoan")
      .then(res => {
        setTotal(res.data)

        console.log(total)
      })
  }, [])

  function addRowHandlers() {
    var table = document.getElementById("table");
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      var currentRow = rows[i];
      var createClickHandler = function (row) {
        return function () {
          var cells = row.getElementsByTagName("td");
          setInfoDel(
            { id: cells[0].innerHTML, type: cells[2].innerHTML }
          )
          for (var j = 0; j < cells.length; j++) {
            if (cells[j].style.backgroundColor === 'white' || cells[j].style.backgroundColor === '') {
              cells[j].style.backgroundColor = 'lightblue'
            }
            else {
              cells[j].style.background = 'white'
            }
          };
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }

  addRowHandlers()

  function del() {
    alert(infoDel.type)
  }

  return (
    <div>
      <Header />
      <div className='useraccount-content'>
        <Sidebar />
        <div className='useraccount-table'>
          <div className='table-interact'>
            <button onClick={del}>Xóa</button>
            <label for="user-type">Loại người dùng</label>
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
                  <th> Username </th>
                  <th> Loại Tài Khoản </th>
                </tr>
              </thead>
              <tbody id='tbody'>
                {Object.keys(total).map((accounts) => {
                  if (accounts === "CuaHang") {
                    total[accounts] && total[accounts].map((account) => {
                      var row = document.getElementById("tbody").insertRow(0)
                      row.insertCell(0).innerHTML = account.mach;
                      row.insertCell(1).innerHTML = account.username;
                      row.insertCell(2).innerHTML = "Chủ cửa hàng";
                    })
                  }

                  if (accounts === "KhachHang") {
                    total[accounts] && total[accounts].map((account) => {
                      var row = document.getElementById("tbody").insertRow(0)
                      row.insertCell(0).innerHTML = account.id;
                      row.insertCell(1).innerHTML = account.username;
                      row.insertCell(2).innerHTML = "Khách mua hàng";
                    })
                  }

                  if (accounts === "Shipper") {
                    total[accounts] && total[accounts].map((account) => {
                      var row = document.getElementById("tbody").insertRow(0)
                      row.insertCell(0).innerHTML = account.id;
                      row.insertCell(1).innerHTML = account.username;
                      row.insertCell(2).innerHTML = "Shipper";
                    })
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default UserAccountManagement;
