import core from 'metal';
import JSXComponent from 'metal-jsx';
import PointsSummary from './components/points-summary/points-summary';
import LatestPurchases from './components/latest-purchases/latest-purchases';
import ProductsOffered from './components/products-offered/products-offered';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div class="container">
				<div class="row">
					<div class="col-2">
						<PointsSummary />
					</div>
					<div class="col-10">
						<div class="col-12">
							<LatestPurchases />
						</div>
						<div class="col-12">
							<ProductsOffered />
						</div>
					</div>
				</div>
			</div>
        );
    }
}

AppComponent.PROPS = {
    portletNamespace: {
        validator: core.isString,
        value: '(unknown portletNamespace)'
    },
	contextPath: {
        validator: core.isString,
        value: '(unknown contextPath)'
    },
	portletElementId: {
		validator: core.isString,
        value: '(unknown portletElementId)'
	}
};