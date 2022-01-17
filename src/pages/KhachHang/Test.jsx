import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router-dom'

export default function Test(props) {
    const url = 'http://localhost:8080/api/hanghoa';
    const { accountInfo, setStoreInfo, mathang, setMatHang } = props
    const [pageNumber, setPageNumber] = useState(0);
    const navigate = useNavigate();

    function toStore(event, obj) {
        event.preventDefault()
        setStoreInfo(obj)
        navigate('/store')
    }

    function addToCart(event) {
        const productToCart = {
            so_luong: 1,
            ma_mat_hang: event.target.getAttribute('data-key'),
            ma_combo: '',
            ma_gio_hang: ''
        }

        axios.post('http://localhost:8080/api/chonhang/' + accountInfo.id, productToCart)
        .then(res => {
            if (res.status === 201) {
                alert('Đã thêm vào giỏ')
            }
        })
        .catch(error => console.log(error));
    }

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

    const matHangPerPage = 8;
    const pagesVisited = pageNumber * matHangPerPage;
    const displayMatHang = mathang
        .slice(pagesVisited, pagesVisited + matHangPerPage)
        .map(MatHang =>
            <div className="col-lg-3 col-sm-6 MatHang" key={MatHang["MatHang"].mamh}>
                <div className="sell-item max-width-360">
                    <div className="product-img">
                        <img src={MatHang["MatHang"].hinhanh} />
                        <div className="product-img-overlay">
                            <button onClick={addToCart} data-key={MatHang["MatHang"].mamh} className="krishok-btn">
                                THÊM VÀO GIỎ HÀNG
                                <i className="fa fa-shopping-cart" />
                            </button>
                        </div>
                    </div>
                    <p>{MatHang["MatHang"].ten}</p>
                    <button className='toStore-btn' onClick={(e) => toStore(e, MatHang.CuaHang)}>{MatHang["CuaHang"].tench}</button>
                    <h5>{MatHang["MatHang"].gia.toLocaleString()} vnd | {MatHang["MatHang"].khoiluong} kg</h5>
                </div>
            </div>
        );

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

    const pageCount = Math.ceil(mathang.length / matHangPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className="row product-item">
                {displayMatHang}
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}>
                </ReactPaginate>
            </div>
        </div>
    );
};