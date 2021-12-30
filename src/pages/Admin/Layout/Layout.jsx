import Header from '../../../components/Admin-Header';
import Footer from '../../../components/Admin-Footer';
import Sidebar from '../../../components/Admin-Sidebar';
import style from './style.module.css';

const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <div className={style.container}>
          <Sidebar />
          {children}
        </div>
  
        <Footer />
      </>
    );
  };
  
  export default Layout;