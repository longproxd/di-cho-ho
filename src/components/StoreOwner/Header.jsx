import logo from '../../assets/img/logo.png';
import { useState } from 'react';

function Storeowner_header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='storeowner-header-wrapper'>
      <div className='storeowner-header-container'>
        <a className='logo-header' href='/'>
          <img className='logo-header-img' src={logo} alt='App logo' />
        </a>
        <h2> Website dành cho chủ cửa hàng </h2>
      </div>
      <div
        className='storeowner-header-icon-container'
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className='fa fa-user-circle-o admin-header-icon' />
        {showMenu ? (
          <div className='storeowner-header-icon-menu'>
            <a href='#'>Đăng xuất</a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Storeowner_header;
