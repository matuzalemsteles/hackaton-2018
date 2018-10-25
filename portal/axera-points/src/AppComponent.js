import {Config} from 'metal-state';
import JSXComponent from 'metal-jsx';
import withWeDeploy from './withWeDeploy';
import PointsSummary from './components/points-summary/points-summary';
import LatestPurchases from './components/latest-purchases/latest-purchases';
import ProductsOffered from './components/products-offered/products-offered';

class AppComponent extends JSXComponent {
    static PROPS = {
        portletNamespace: Config.string().value('(unknown portletNamespace)'),
        contextPath: Config.string().value('(unknown contextPath)'),
        portletElementId: Config.string().value('(unknown portletElementId)'),
        data: Config.any(),
    }

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

export default withWeDeploy(AppComponent);
