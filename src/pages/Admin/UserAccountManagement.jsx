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
                    <table className='table'>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td> 
                        </tr>
                        
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default UserAccountManagement;