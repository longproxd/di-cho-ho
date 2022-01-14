import Header from '../../components/StoreOwner/Header';
import Footer from '../../components/StoreOwner/Footer';
import Sidebar from '../../components/StoreOwner/Sidebar';
import { useState } from 'react';

function EditProduct() {
  const [MatHang, setMatHang] = useState({
    xuat_xu: "",
    so_luong_ton: "",
    khoi_luong: "",
    hinh_anh: "",
    gia_ban: "",
    loai_mat_hang: "",
    ma_cua_hang: "",
    ten_mat_hang: "",
  })

  function handleChange(event) {
    const value = event.target.value

    setMatHang({
      ...MatHang,
      [event.target.name]: value
    })
  }

  return (
    <div>
      <Header />
      <div className='store-content'>
        <Sidebar />
        <div class='storeform-container'>
          <form>
            <div class='row'>
              <div class='col-25'>
                <label for='fname'>Tên Mặt Hàng</label>
              </div>
              <div class='col-75'>
                <input
                  type='text'
                  onChange={handleChange}
                  id='fname'
                  name='firstname'
                  placeholder='Tên mặt hàng cần sửa'
                />
              </div>
            </div>
            <div class='row'>
              <div class='col-25'>
                <label for='fname'>Loại Mặt Hàng</label>
              </div>
              <div class='col-75'>
                <input
                  type='text'
                  onChange={handleChange}
                  id='fname'
                  name='firstname'
                  placeholder='Loại mặt hàng'
                />
              </div>
            </div>
            <div class='row'>
              <div class='col-25'>
                <label for='fname'>Xuất Xứ</label>
              </div>
              <div class='col-75'>
                <input
                  type='text'
                  onChange={handleChange}
                  id='fname'
                  name='firstname'
                  placeholder='Xuất xứ'
                />
              </div>
            </div>
            <div class='row'>
              <div class='col-25'>
                <label for='fname'>Số lượng tồn</label>
              </div>
              <div class='col-75'>
                <input
                  type='text'
                  onChange={handleChange}
                  id='fname'
                  name='firstname'
                  placeholder='Số lượng'
                />
              </div>
            </div>
            <div class='row'>
              <div class='col-25'>
                <label for='fname'>Khối Lượng</label>
              </div>
              <div class='col-75'>
                <input
                  type='text'
                  id='fname'
                  onChange={handleChange}
                  name='firstname'
                  placeholder='Khối lượng'
                />
              </div>
            </div>
            <div class='row'>
              <div class='col-25'>
                <label for='fname'>Giá Bán</label>
              </div>
              <div class='col-75'>
                <input
                  type='text'
                  id='fname'
                  onChange={handleChange}
                  name='firstname'
                  placeholder='Giá'
                />
              </div>
            </div>
            <div class='row'>
              <div class='col-25'>
                <label for='fname'>Hình ảnh</label>
              </div>
              <div class='col-75'>
                <input
                  type='text'
                  id='fname'
                  onChange={handleChange}
                  name='firstname'
                  placeholder='Vui lòng copy link hình ảnh vào đây'
                />
              </div>
            </div>
            <a href="/">
              <button className='buttonAddProduct'> Sửa </button>
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProduct;
