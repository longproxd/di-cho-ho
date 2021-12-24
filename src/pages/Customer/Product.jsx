import logo from '../../assets/img/logo.png';
import axios from 'axios';
import { Component } from 'react';

export default class Product extends Component {
    state = {
        MatHang: []
    }

    componentDidMount() {
        axios.get('https://localhost:8001/api/MatHang')
            .then(res => {
                const MatHang = res.data;
                this.setState({ MatHang });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <body>
                <header className="header-area ptb-15">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 two">
                                <div className="header-left-content">
                                    <ul>
                                        <li><a href="/"><img className='logo-img' src={logo} alt="logo" /></a></li>
                                        <li><i className="fa fa-phone" />0123 456 789</li>
                                        <li><i className="fa fa-envelope" />R7@hcmus.edu.vn</li>

                                        <li id="li-nearlast">
                                            <form className="form-search" role="search">
                                                <input type="text" placeholder="Tìm sản phẩm" />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-5 two">
                                <div className="header-right-content">
                                    <div className="header-right-content-cart">
                                        <ul>
                                            <li>
                                                <a href="/cart" className="krishok-cart"><i className="fa fa-shopping-cart" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </header >

                < section className="theme2 hero-area ptb-80" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="hero-area-content">
                                    <h1>Nơi Mua Sắm Đáng Tin Cậy</h1>
                                    <p>Đi Chợ Hộ được xây dựng trong bối cảnh đại dịch COVID-19 nhằm tối ưu hoá quy trình đăng ký mua hàng, giao nhận hàng hoá, tạo sự tiện lợi và đơn giản hơn cho người dân trong thời điểm dịch bệnh. Hệ thống hỗ trợ tối đa sự liên kết giữa người dân và các cửa hàng, siêu thị, để đảm bảo thực phẩm luôn được cung cấp đầy đủ, giá cả hợp lí.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section className="shopping-product ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shopping-product-menu max-width-360">
                                    <ul>
                                        <li data-filter="*" className="active">Tất Cả Mặt Hàng</li>
                                        &nbsp;
                                        <li data-filter=".combo">Combo Mặt Hàng</li>
                                        &nbsp;
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row product-item">
                            {this.state.MatHang.map(MatHang =>
                                <div className="col-lg-3 col-sm-6 MatHang">
                                    <div className="sell-item max-width-360">
                                        <div className="product-img">
                                            <img src={MatHang.hinh_anh} alt="" />
                                            <div className="product-img-overlay">
                                                <a href="/cart" className="krishok-btn">Add to cart <i className="fa fa-shopping-cart" /></a>
                                            </div>
                                        </div>
                                        <p><a href="/">{MatHang.ten_mat_hang}</a></p>
                                        <h5>{MatHang.gia_ban} vnd | {MatHang.khoi_luong} kg</h5>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </body>
        );
    }
}