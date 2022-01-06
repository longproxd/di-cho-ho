import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

function UserAccountManagement() {
  return (
    <div>
      <Header />
      <div className='useraccount-content'>
        <Sidebar />
        <div className='useraccount-table'>
          <div className='table-interact'>
            <button>Xóa</button>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default UserAccountManagement;
