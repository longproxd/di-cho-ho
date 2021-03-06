import axios from 'axios';
import { useState, useEffect } from 'react';

export default function LichSuMuaHang({ accountInfo }) {
    const url = 'http://localhost:8080/api/khachhang/lichsu/' + accountInfo.id;
    const [donhang, setDonhang] = useState();
    const [madonhang, setmaDonhang] = useState();

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setDonhang(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    function handleClick(event) {
        event.preventDefault()
        setmaDonhang(donhang[3]["DonHang"].madh)
        console.log(madonhang)

        axios.delete('http://localhost:8080/api/donhang/xoa/' + madonhang)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    //table component
    const TableBody = (props) => {
        return (
            <tbody>
                {props.data.map(item =>
                    <Row
                        key={item.DonHang.madh} uid={item.DonHang.madh} date=''
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
                            <th> ????n h??ng </th>
                            <th> Ng??y ?????t </th>
                            <th> C???a h??ng </th>
                            <th> T???ng ti???n </th>
                            <th> Tr???ng th??i ????n h??ng </th>
                            <th> Ng?????i giao h??ng </th>
                        </tr>
                    </thead>
                    {donhang && <TableBody data={donhang} />}
                </table>
                <button className='HuyDonHang' onClick={handleClick}>H???y ????n h??ng</button>
            </div>
        </div>
    );
}