import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Shipper/Header';
import Sidebar from '../../components/Shipper/Sidebar';
import Footer from '../../components/Shipper/Footer';

export default function LichSuGiaoHang(props) {
    const [donhang, setDonhang] = useState();
    const {shipperAcc, setShipperAcc} = props
    const url = 'http://localhost:8080/api/shipper/lichsu/' + (shipperAcc && shipperAcc.id);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setDonhang(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    //table component
    const TableBody = (props) => {
        return (
            <tbody>
                {props.data.map(item =>
                    <Row
                        key={item.DonHang.madh} uid={item.DonHang.madh} date={item.DonHang.ngaydat}
                        store={item.CuaHang.tench} total={item.DonHang.tongtien}
                        state={item.DonHang.tinhtrangdon} shipper={item.KhachHang.ten} />
                )}
            </tbody>
        )
    }

    //row component
    const Row = (props) => {
        const { uid, date, store, total, state, shipper } = props;

        function RowClick(event) {

        }

        return (
            <tr key={uid} onClick={RowClick}>
                <td><a href='#'>{uid}</a></td>
                <td>{date}</td>
                <td>{store}</td>
                <td>{total}</td>
                <td>{state}</td>
                <td>{shipper}</td>
            </tr>
        )
    }

    return (
        <div>
            <Header shipperAcc={shipperAcc} setShipperAcc={setShipperAcc} />
            <div className='row history-container'>
                <Sidebar />
                <table id='table' className='history-table'>
                    <thead>
                        <tr>
                            <th> Đơn hàng </th>
                            <th> Ngày đặt </th>
                            <th> Cửa hàng </th>
                            <th> Tổng tiền </th>
                            <th> Trạng thái đơn hàng </th>
                            <th> Người mua hàng </th>
                        </tr>
                    </thead>
                    {donhang && <TableBody data={donhang} />}
                </table>
            </div>
            <Footer />
        </div>
    );
}