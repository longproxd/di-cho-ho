import React, { useState } from 'react';
import style from './style.module.css';
import Layout from './Layout/Layout';
import CustomerStatistic from './CustomerStatistic';
import CustomerManagement from './CustomerManagement';

import axios from 'axios';

function CusStatistic() {
  const [currentTab, setCurrentTab] = useState('manage');
  const [idDel, setIdDel] = useState()

  function del() {
    axios.delete('http://localhost:8080/api/xoa/' + idDel)
  }

  const handleSwitchTab = (tab) => {
    if (tab === 'stat') return setCurrentTab('stat');
    if (tab === 'manage') return setCurrentTab('manage');
  };

  return (
    <Layout>
      <div className={style.content}>
        <div className={style.tabs_container}>
          <div className={style.tabs}>
            <div
              className={`${style.tab} ${
                currentTab === 'manage' ? style.active : null
              }`}
              onClick={() => handleSwitchTab('manage')}
            >
              Quản lý
            </div>
            <div
              className={`${style.tab} ${
                currentTab === 'stat' ? style.active : null
              }`}
              onClick={() => handleSwitchTab('stat')}
            >
              Thống kê
            </div>
          </div>
          {currentTab === 'manage' ? (
            <div className={style.tabs__btns_container}>
              <button>Thêm</button>
              <button onClick={del}>Xoá</button>
            </div>
          ) : null}
        </div>
        <div className={style.tab_panel}>
          {currentTab === 'stat' ? <CustomerStatistic />
           : <CustomerManagement setIdDel={setIdDel} />}
        </div>
      </div>
    </Layout>
  );
}

export default CusStatistic;