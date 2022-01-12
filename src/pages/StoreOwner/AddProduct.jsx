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
                            <label for="fname">Mã Cửa Hàng</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Hãy nhập mã cửa hàng của bạn"/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Tên Mặt Hàng</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Tên mặt hàng"/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Loại Mặt Hàng</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Loại mặt hàng"/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Xuất Xứ</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Xuất xứ"/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Số lượng tồn</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Số lượng"/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Khối Lượng</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Khối lượng"/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Giá Bán</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Giá"/>
                         </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Hình ảnh</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Vui lòng copy link hình ảnh vào đây"/>
                         </div>
                    </div>
                    <button className='buttonAddProduct'> Thêm </button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddProduct;