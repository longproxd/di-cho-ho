// import logo from '../../assets/img/logo.png';
// import axios from 'axios';
// import { Component, useState } from 'react';

// export default function Store() {
//     const [matHang, setMatHang] = useState('');

//     // componentDidMount() {
//     //     axios.get('https://localhost:8001/api/mathang')
//     //         .then(res => {
//     //             const MatHang = res.data;
//     //             this.setState({ MatHang });
//     //         })
//     //         .catch(error => console.log(error));

//     //     axios.get('http://localhost:8080/api/cuahang')
//     //         .then(res => {
//     //             const CuaHang = res.data;
//     //             this.setState({ CuaHang });
//     //         })
//     //         .catch(error => console.log(error));
//     // }

//     return (
//         <body>
//             <header className="header-area ptb-15">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-7 two">
//                             <div className="header-left-content">
//                                 <ul>
//                                     <li><a href="/"><img className='logo-img' src={logo} alt="logo" /></a></li>
//                                     <li><i className="fa fa-phone" />0123 456 789</li>
//                                     <li><i className="fa fa-envelope" />R7@hcmus.edu.vn</li>

//                                     <li id="li-nearlast">
//                                         <form className="form-search" role="search">
//                                             <input type="text" placeholder="Tìm sản phẩm" />
//                                         </form>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="col-md-5 two">
//                             <div className="header-right-content">
//                                 <div className="header-right-content-cart">
//                                     <ul>
//                                         <li>
//                                             <a href="/cart" className="krishok-cart"><i className="fa fa-shopping-cart" /></a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div >
//             </header >

//             {this.state.CuaHang.slice(0, 1).map(CuaHang =>
//                 <section className="theme2 hero-area ptb-80" style={{ background: "transparent", padding: "0" }}>
//                     <img src={CuaHang.hinh_anh} alt="" style={{ width: "100%", height: "330px" }} />
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-8 offset-lg-2">
//                                 <div className="hero-area-content">
//                                     <h1>{CuaHang.ten_cua_hang}</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section >
//             )}

//             <section className="shopping-product ptb-80">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-10 offset-lg-1">
//                             <div className="shopping-product-menu max-width-360">
//                                 <ul>
//                                     <li data-filter="*" className="active">Tất Cả Mặt Hàng</li>
//                                     &nbsp;
//                                     <li data-filter=".combo">Combo Mặt Hàng</li>
//                                     &nbsp;
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row product-item">
//                         {this.state.MatHang.slice(0, 7).map(MatHang =>
//                             <div className="col-lg-3 col-sm-6 MatHang">
//                                 <div className="sell-item max-width-360">
//                                     <div className="product-img">
//                                         <img src={MatHang.hinh_anh} alt="" />
//                                         <div className="product-img-overlay">
//                                             <a href="/cart" className="krishok-btn">THÊM VÀO GIỎ HÀNG<i className="fa fa-shopping-cart" /></a>
//                                         </div>
//                                     </div>
//                                     <p><a href="/">{MatHang.ten_mat_hang}</a></p>
//                                     <h5>{MatHang.gia_ban} vnd | {MatHang.khoi_luong} kg</h5>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </body>
//     );
// }