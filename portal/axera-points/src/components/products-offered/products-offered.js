import JSXComponent from 'metal-jsx';
import ProductOfferedItem from './product-offered-item';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div>
                <ProductOfferedItem />
                <ProductOfferedItem />
            </div>
        );
    }
}