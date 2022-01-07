import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';
import Layout from './Layout/Layout';
import style from './style.module.css';

function Demand() {
    return (
        <Layout>
            <div className={style.content}>
                <h3>So sánh nhu cầu thực phẩm</h3>
                <div className={style.demand_panel}>
                    <div className={style.demand_statistic__container}>
                        <div className={style.demand_statistic__screen_1}>
                            <ul>
                                <li>
                                    <select id="Quy">
                                        <option selected>  </option>
                                    </select>
                                    <label for="Quy">Quý</label>
                                </li>
                                <li>
                                    <select id="Thang">
                                        <option selected>  </option>
                                    </select>
                                    <label for="Thang">Tháng</label>
                                </li>
                                <li>
                                    <select id="Nam">
                                        <option selected>  </option>
                                    </select>
                                    <label for="Nam">Năm</label>
                                </li>
                            </ul>
                        </div>
                        <div className={style.demand_statistic__screen_2}>
                        <ul>
                                <li>
                                    <select id="Quy">
                                        <option selected>  </option>
                                    </select>
                                    <label for="Quy">Quý</label>
                                </li>
                                <li>
                                    <select id="Thang">
                                        <option selected>  </option>
                                    </select>
                                    <label for="Thang">Tháng</label>
                                </li>
                                <li>
                                    <select id="Nam">
                                        <option selected>  </option>
                                    </select>
                                    <label for="Nam">Năm</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Demand;