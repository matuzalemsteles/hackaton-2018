import JSXComponent from 'metal-jsx';
import ProductOfferedItem from './product-offered-item';

export default class AppComponent extends JSXComponent {
	render() {
        const {suggestions} = this.props;

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
                            <h3>Product Suggestions</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="products-list">
                            {suggestions.filter((item,index) => index < 6).map(item => (
                                <ProductOfferedItem name={item.name} value={item.value} imageUrl={item.imageUrl} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}