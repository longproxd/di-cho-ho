import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function Test() {
    const url = 'https://localhost:8001/api/mathang';
    const [MatHang, setMatHang] = useState([].slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const matHangPerPage = 10;
    const pagesVisited = pageNumber * matHangPerPage;
    const displayMatHang = MatHang
        .slice(pagesVisited, pagesVisited + matHangPerPage)
        .map(MatHang =>
            <div className="col-lg-3 col-sm-6 MatHang" key={MatHang.Id}>
                <div className="sell-item max-width-360">
                    <div className="product-img">
                        <img src={MatHang.hinh_anh} />
                        <div className="product-img-overlay">
                            <a href="/cart" className="krishok-btn">THÊM VÀO GIỎ HÀNG<i className="fa fa-shopping-cart" /></a>
                        </div>
                    </div>
                    <p><a href="/">{MatHang.ten_mat_hang}</a></p>
                    <h5>{MatHang.gia_ban.toLocaleString()} vnd | {MatHang.khoi_luong} kg</h5>
                </div>
            </div>);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setMatHang(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const pageCount = Math.ceil(MatHang.length / matHangPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <section className="shopping-product ptb-80">
                <div className="container">
                    {displayMatHang}
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtn"}
                        previousLinkClassName={"previousBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    >
                        {/* <div class="row">
                            <div class="col-md-12">
                                <ul class="pagination">
                                    <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li class="active"><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div> */}
                    </ReactPaginate>
                </div>
            </section>
        </div>
    );
};