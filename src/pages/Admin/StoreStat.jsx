import React, { useState } from 'react';
import style from './style.module.css';
import Layout from './Layout/Layout';
import StoreStatistic from './StoreStatistic';
import StoreManagement from './StoreManagement';

import axios from 'axios';

function StoreStat() {
  const [currentTab, setCurrentTab] = useState('manage');
  const [idDel, setIdDel] = useState()

  function del() {
    axios.delete('http://localhost:8080/api/cuahang/xoa/' + idDel)
    .then(res => {
      if(res.status === 204)
      {
        alert('Hoàn tất')
      }
    })
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
          {currentTab === 'manage' ? 
          <div className={style.tabs__btns_container}>
            <button>Thêm</button>
            <button onClick={del}>Xoá</button>
          </div>
          : null}
        </div>
        <div className={style.tab_panel}>
          {currentTab === 'stat' ? <StoreStatistic /> 
          : <StoreManagement setIdDel={setIdDel} />}
        </div>
      </div>
    </Layout>
  );
}

export default StoreStat;
