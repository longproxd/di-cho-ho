import { useState, useEffect } from "react";
import axios from "axios";

export default function GioHang({ accountInfo }) {
    const url = `http://localhost:8080/api/giohang/${accountInfo.id}`;
    const [cartDetails, setcartDetails] = useState()
    const [provisional, setProvisional] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setcartDetails(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [url])

    function removeFromCart(obj) {
        axios.delete('http://localhost:8080/api/gio/xoa/' + obj.mamh)
            .then(res => {
                if (res.status === 204) {
                    alert('Xóa')
                }
            })
            .catch(error => alert(error));
    }

    function getMoney(item) {
        setProvisional([...provisional, item])
    }

    console.log(provisional)

    return (
        <div>
            <a href="/" className="continue-btn krishok-btn">Tiếp tục mua hàng</a>
            <div className="cart-container">
                <div className="col">
                    {cartDetails && cartDetails.map(detail =>
                        <div key={detail.ChiTiet.id}>
                            {detail.MatHang === null ? null :
                                <div className="row cart-product">
                                    <div className="cart-product-img">
                                        <img src={detail.MatHang.hinhanh} />
                                    </div>
                                    <div className="col cart-product-left">
                                        <h5>{detail.MatHang.ten}</h5>
                                        <h5>DVT: {detail.MatHang.khoiluong} kg</h5>
                                        <button onClick={() => removeFromCart(detail.MatHang)}>
                                            <i className="fa fa-trash" />
                                        </button>
                                    </div>
                                    <div className="row cart-product-right">
                                        <h5 
                                            className="singleitem-price">
                                            {detail.MatHang.gia.toLocaleString()}₫
                                        </h5>
                                        <div className="cart-quantity-box">
                                            <button type="button" className="btn-success">
                                                <span>-</span>
                                            </button>
                                            <input readOnly className="quantity-box" value={detail.ChiTiet.so_luong} />
                                            <button type="button" className="btn-danger">
                                                <span>+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            {detail.ComboMatHang === null ? null :
                                <div className="row cart-product">
                                    <div className="cart-product-img">
                                        <img src={detail.ComboMatHang.hinhanh} />
                                    </div>
                                    <div className="col cart-product-left">
                                        <h5>{detail.ComboMatHang.tencombo}</h5>
                                        <h5>DVT: {detail.ComboMatHang.khoiluong} kg</h5>
                                        <button data-key={detail.MatHang.mamh}
                                            onClick={removeFromCart}>
                                            <i className="fa fa-trash" />
                                        </button>
                                    </div>
                                    <div className="row cart-product-right">
                                        <h5 className="singleitem-price">{detail.ComboMatHang.gia.toLocaleString()}₫</h5>
                                        <div className="cart-quantity-box">
                                            <button type="button" className="btn-success">
                                                <span>-</span>
                                            </button>
                                            <input readOnly className="quantity-box" value={detail.ChiTiet.so_luong} />
                                            <button type="button" className="btn-danger">
                                                <span>+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>}

                        </div>
                    )}
                </div>
            </div>
            <div className="checkout-container">
                <div className="row checkout-content">
                    <div className='checkout-text-content'>
                        <p>Tạm tính:</p>
                        <p>Phí vận chuyển:</p>
                        <p>Thành tiền:</p>
                    </div>
                    <div className='checkout-number-content'>
                        <p>25.000 ₫</p>
                        <p>23.000 ₫</p>
                        <p>48.000 ₫</p>
                    </div>
                </div>
                <button className="payment-btn krishok-btn">Thanh toán</button>
            </div>

        </div>
    )
}