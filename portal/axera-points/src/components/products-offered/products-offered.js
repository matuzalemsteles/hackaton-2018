import JSXComponent from 'metal-jsx';
import ProductOfferedItem from './product-offered-item';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div>
                <h3>Troque por produtos</h3>
                <h4>Produtos naturais</h4>
                <div class="d-flex justify-content-between">
                    <ProductOfferedItem discount="50" name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                    <ProductOfferedItem discount="30" name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                    <ProductOfferedItem discount="30" name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                    <ProductOfferedItem name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                    <ProductOfferedItem name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                </div>
                <h4>Corrida</h4>
                <div class="d-flex justify-content-between">
                    <ProductOfferedItem name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                    <ProductOfferedItem name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                    <ProductOfferedItem name="test 1" value="122" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-salmon-oil-1000-mg-100107007-a.jpg"/>
                </div>
            </div>
        );
    }
}