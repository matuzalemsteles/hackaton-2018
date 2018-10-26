import {Config} from 'metal-state';
import JSXComponent from 'metal-jsx';
import withWeDeploy from './withWeDeploy';
import PointsSummary from './components/points-summary/points-summary';
import LatestPurchases from './components/latest-purchases/latest-purchases';
import ProductsOffered from './components/products-offered/products-offered';

class AppComponent extends JSXComponent {
    static PROPS = {
		data: Config.any(),
		suggestions: Config.any(),
    }

	render() {
		const {data, suggestions} = this.props;

		let points = 0;

		if (data) {
			points = data.reduce((preVal, elem) => preVal + parseInt(elem.points), 0);
		}

        return (
            <div class="app-component container">
				<div class="col-welcome">
					<h2>Welcome, <span>{window.themeDisplay && window.themeDisplay.getUserName() || 'Axera'}</span></h2>
				</div>
				<div class="row">
					<div class="col-md-3">
						<PointsSummary points={points} />
					</div>
					<div class="col-md-9">
						<ProductsOffered />
					</div>
				</div>
			</div>
        );
    }
}

export default withWeDeploy(AppComponent);
