import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

function Commitment() {
  return (
    <div>
      <Header />
      <div className='useraccount-content'>
        <Sidebar />
        <div className='useraccount-table'>
          <div className='table-container'>
            <table id='table' className='table-uam'>
              <thead>
                <tr>
                  <th> Mã cửa hàng </th>
                  <th> Địa chỉ </th>
                  <th> Số điện thoại </th>
                  <th> Tiền hoa hồng </th>
                  <th> Tháng </th>
                </tr>
              </thead>
              <tbody id='tbody'>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Item 2</td>
                  <td>Item 3</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='commitment-interact'>
            <div className='commitment-search'>
              <h3>Tra cứu thông tin</h3>
              <div className='commitment-search-content'>
                <ul>
                  <li>
                    <ul className='commitment-search-ul-child'>
                      <li>
                        <label for="shop-id">Mã cửa hàng</label>
                        <input id="shop-id" type="text"></input>
                      </li>
                      <li>
                        <label for="month">Tháng</label>
                        <select id="month">
                          <option>Option A</option>
                        </select>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className='commitment-search-ul-child'>
                      <li>
                        <label for="commitment-value">Tiền hoa hồng</label>
                        <input id="commitment-value" disabled></input>
                      </li>
                      <li>
                        <button>Tra cứu</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='commitment-calculate'>
              <h3>Tính toán tiền hoa hồng</h3>
              <div className='commitment-calculate-content'>
                <ul>
                  <li>
                    <ul className='commitment-calculate-ul-child'>
                      <li>
                        <select>
                          <option selected>Tháng</option>
                        </select>
                      </li>
                      <li>
                        <select>
                          <option selected>Năm</option>
                        </select>
                      </li>
                    </ul>
                  </li>
                  <li className='second-li'>
                    <button>Tính toán</button>
                  </li>
                  <li className='last-li'>
                    <label for="commitment-value">Tổng</label>
                    <input id="commitment-value" disabled></input>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='space'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Commitment;