import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Test() {
    // const url = 'https://localhost:8001/api/mathang';
    // const [MatHang, setMatHang] = useState([].slice(0, 50));
    // const [pageNumber, setPageNumber] = useState(0);

    // const matHangPerPage = 10;
    // const pagesVisited = pageNumber * matHangPerPage;
    // const displayMatHang = MatHang
    //     .slice(pagesVisited, pagesVisited + matHangPerPage)
    //     .map(MatHang =>
    //         <div className="col-lg-3 col-sm-6 MatHang" key={MatHang.Id}>
    //             <div className="sell-item max-width-360">
    //                 <div className="product-img">
    //                     <img src={MatHang.hinh_anh} />
    //                     <div className="product-img-overlay">
    //                         <a href="/cart" className="krishok-btn">THÊM VÀO GIỎ HÀNG<i className="fa fa-shopping-cart" /></a>
    //                     </div>
    //                 </div>
    //                 <p><a href="/">{MatHang.ten_mat_hang}</a></p>
    //                 <h5>{MatHang.gia_ban.toLocaleString()} vnd | {MatHang.khoi_luong} kg</h5>
    //             </div>
    //         </div>);

    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => {
    //             console.log(res);
    //             setMatHang(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [])

    // const pageCount = Math.ceil(MatHang.length / matHangPerPage);
    // const changePage = ({ selected }) => {
    //     setPageNumber(selected);
    // };

    return (
        <div>
            
        </div>
    );
};