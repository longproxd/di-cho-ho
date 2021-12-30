import Header from '../../components/Admin-Header';
import Footer from '../../components/Admin-Footer';

function LoginForm() {
    return (
        <div>
            <Header />
            <div className='admin-login-container'>
                <form action="/admin-home" className='admin-login-form'>
                    <h2>Login Form</h2>
                    <div class="adminlogin-textbox">
                        <i class="fa fa-user icon"></i>
                        <input class="admin-textfield" type="text" placeholder="Username" name="usrnm" />
                    </div>

                    <div class="adminlogin-textbox">
                        <i class="fa fa-key icon"></i>
                        <input class="admin-textfield" type="password" placeholder="Password" name="psw" />
                    </div>

                    <button type="submit" class="btn">Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default LoginForm;