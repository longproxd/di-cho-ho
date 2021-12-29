import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';
function Admin_header() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default Admin_header;