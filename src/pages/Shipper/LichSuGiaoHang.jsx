import axios from 'axios';
import { useState, useEffect } from 'react';

export default function LichSuGiaoHang() {
    const url = 'https://localhost:8001/api/donhang';
    const [DonHang, setDonHang] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                if (res.data.ma_shipper = "61c3d5ff0296576ff58de98f") {
                    setDonHang(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {DonHang.map(DonHang =>
                <ul key={DonHang.Id}>
                    <li>
                        {DonHang.Id}
                    </li>
                </ul>
            )}
        </div>
    );
}