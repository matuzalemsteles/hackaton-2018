import JSXComponent from 'metal-jsx';
import ProductOfferedItem from './product-offered-item';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div>
                <div class="products-section">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="jumbotron">
                                <div class="container">
                                    <h1 class="display-4">Exchange for products</h1>
                                    <p class="lead">Exchange your points for various products at <a>TAF</a> physical stores or at <a>GNC</a> electronic stores.</p>
                                </div>
                            </div>
                            <h3>Natural Products</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="products-list">
                            <ProductOfferedItem discount="50" name="test 1" value="122" imageUrl="/o/axera/images/_gnc-magnesio-250-mg-fresa-141603167-a-460.jpg"/>
                            <ProductOfferedItem discount="30" name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                            <ProductOfferedItem discount="30" name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="products-section">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Running Shoes</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="products-list">
                            <ProductOfferedItem name="Product" value="1500 Pontos" height="auto" imageUrl="/o/axera/images/air max 270.png"/>
                            <ProductOfferedItem name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                            <ProductOfferedItem name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}