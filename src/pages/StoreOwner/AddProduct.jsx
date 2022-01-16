import Header from '../../components/StoreOwner/Header';
import Footer from '../../components/StoreOwner/Footer';
import Sidebar from '../../components/StoreOwner/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const url = 'https://localhost:8001/api/mathang';
    const [MatHang, setMatHang] = useState({
        xuat_xu: '',
        so_luong_ton: '',
        khoi_luong: '',
        hinh_anh: '',
        gia_ban: '',
        loai_mat_hang: '',
        ma_cua_hang: '',
        ten_mat_hang: '',
    })


    function handleChange(event) {
        const value = event.target.value

        setMatHang({
            ...MatHang,
            [event.target.name]: value
        })
    }

    function handleClick(event) {
        event.preventDefault()

        axios.post(url, MatHang)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Header />
            <div className='store-content'>
                <Sidebar />
                <div className="storeform-container">
                    <form>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Mã Cửa Hàng</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.ma_cua_hang} id="fname" name="ma_cua_hang" placeholder="Hãy nhập mã cửa hàng của bạn" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Tên Mặt Hàng</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.ten_mat_hang} id="fname" name="ten_mat_hang" placeholder="Tên mặt hàng" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Loại Mặt Hàng</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.loai_mat_hang}
                                    id="fname" name="loai_mat_hang" placeholder="Loại mặt hàng" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Xuất Xứ</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.xuat_xu}
                                    id="fname" name="xuat_xu" placeholder="Xuất xứ" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Số lượng tồn</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.so_luong_ton}
                                    id="fname" name="so_luong_ton" placeholder="Số lượng" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Khối Lượng</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.khoi_luong}
                                    id="fname" name="khoi_luong" placeholder="Khối lượng" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Giá Bán</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.gia_ban}
                                    id="fname" name="gia_ban" placeholder="Giá" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Hình ảnh</label>
                            </div>
                            <div className="col-75">
                                <input type="text" onChange={handleChange} value={MatHang.hinh_anh}
                                    id="fname" name="hinh_anh" placeholder="Vui lòng copy link hình ảnh vào đây" />
                            </div>
                        </div>
                        <button className='buttonAddProduct' onClick={handleClick}> Thêm </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddProduct;