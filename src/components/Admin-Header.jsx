import logo from '../assets/img/logo.png';

function Admin_header() {
    return (
        <div className="admin-header-container">
            <a className="logo-header" href="/">
                <img className="logo-header-img" src={logo} alt="App logo" />
            </a>
            <h2> ADMIN </h2>
            <h4> Trang web người dùng</h4>
        </div>
    );
}

export default Admin_header;