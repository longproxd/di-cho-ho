import logo from '../assets/img/logo.png';
import {useState} from 'react'

function Admin_header() {

    const [showMenu, setShowMenu] = useState(false);



  return (
    <div  className='admin-header-wrapper' >
      <div  className='admin-header-container'>
        <a className='logo-header' href='/'>
          <img className='logo-header-img' src={logo} alt='App logo' />
        </a>
        <h2> ADMIN </h2>
        <h4> Trang web người dùng</h4>
      </div>
      <div className='admin-header-icon-container' onClick={()=>setShowMenu(!showMenu)}><i className='fa fa-user-circle-o admin-header-icon' />
      {showMenu? <div className='admin-header-icon-menu'>
                  <a href='#'>Đăng xuất</a>
                </div>
        :null}
      </div>
    </div>
  );
}

export default Admin_header;
