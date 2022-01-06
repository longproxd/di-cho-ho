import style from './style.module.css';

function StoreManagement() {
  return (
    <div className={style.store_management__container}>
      {/*<div className={style.store_management__screen_1}>Screen 1</div>
      <div className={style.store_management__screen_2}>Screen 2</div>*/}
      <div className='table-container stat'>
            <table id='table' className='table-uam'>
              <thead>
                <tr>
                  <th> Mã cửa hàng </th>
                  <th> Tên cửa hàng </th>              
                  <th> Địa chỉ </th>
                  <th> Số điện thoại </th>                
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
  );
}
export default StoreManagement;
