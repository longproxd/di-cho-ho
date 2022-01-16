import axios from 'axios';
import { useState, useEffect } from 'react';

export default function LichSuMuaHang({ accountInfo }) {
    const url = 'http://localhost:8080/api/khachhang/lichsu/' + accountInfo.id;
    const [donhang, setDonhang] = useState();

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
                        key={item.DonHang.madh} uid={item.DonHang.madh} date='mất'
                        store={item.CuaHang.tench} total={item.DonHang.tongtien}
                        state={item.DonHang.tinhtrangdon} shipper={item.Shipper.ten} />
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
            <div className='history-container'>
                <table id='table' className='history-table'>
                    <thead>
                        <tr>
                            <th> Đơn hàng </th>
                            <th> Ngày đặt </th>
                            <th> Cửa hàng </th>
                            <th> Tổng tiền </th>
                            <th> Trạng thái đơn hàng </th>
                            <th> Người giao hàng </th>
                        </tr>
                    </thead>
                    {donhang && <TableBody data={donhang} />}
                </table>
            </div>
        </div>
    );
}