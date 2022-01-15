import React from 'react'
import style from './style.module.css'
import PieChart from '../../components/PieCharts/StorePieChart';

function StoreStatistic() {
    return (
        <div className={style.store_statistic__container}>
            <div className={style.store_statistic__screen_1}>
                <PieChart/>
            </div>
            <div className={style.store_statistic__screen_2}>Screen 2</div>
        </div>
    );
}
export default StoreStatistic;