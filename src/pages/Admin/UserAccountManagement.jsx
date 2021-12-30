import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';
import Sidebar from '../../components/Admin-Sidebar';

function UserAccountManagement() {
    return (

        <div>
            <Header />
            <div className='useraccount-content'>

                <Sidebar />
                <div className='useraccount-table'>
                    <table id="table" class="table">
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> Username </th>
                                <th> Loại Tài Khoản </th>
                            </tr>
                        </thead>
                        <tbody id="tbody">

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default UserAccountManagement;