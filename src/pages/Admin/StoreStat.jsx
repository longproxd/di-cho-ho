import React, { useState } from 'react';
import style from './style.module.css';
import Layout from './Layout/Layout';
import StoreStatistic from './StoreStatistic';
import StoreManagement from './StoreManagement';

function StoreStat() {
    const [currentTab, setCurrentTab] = useState('manage');

    const handleSwitchTab = (tab) => {
        if (tab === 'stat') return setCurrentTab('stat');
        if (tab === 'manage') return setCurrentTab('manage');
    };

    return (
        <Layout >
            <div className={style.content}>
                <div className={style.tabs}>
                    <div
                        className={`${style.tab} ${currentTab === 'manage' ? style.active : null
                            }`}
                        onClick={() => handleSwitchTab('manage')}
                    >
                        Quản lý
                    </div>
                    <div
                        className={`${style.tab} ${currentTab === 'stat' ? style.active : null
                            }`}
                        onClick={() => handleSwitchTab('stat')}
                    >
                        Thống kê
                    </div>
                </div>
                <div className={style.tab_panel}>
                    {
                    currentTab === 'stat' ? <StoreStatistic /> : <StoreManagement />
                    }
                </div>
            </div>
        </Layout>
    );
}

export default StoreStat;