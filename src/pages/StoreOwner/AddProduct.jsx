import Header from '../../components/StoreOwner/Header';
import Footer from '../../components/StoreOwner/Footer';
import Sidebar from '../../components/StoreOwner/Sidebar';
function AddProduct() {
    return (
        <div>
            <Header />
            <div className='store-content'>
            <Sidebar />
            <div class="storeform-container">
                <form>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                         </div>
                    </div>
                    <button> Thêm </button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddProduct;