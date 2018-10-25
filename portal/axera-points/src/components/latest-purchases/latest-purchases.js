import JSXComponent from 'metal-jsx';
import LatestPurchasesItem from './latest-purchases-item';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div>
                <h3>Últimas compras</h3>
                <ul class="list-group">
                    <LatestPurchasesItem />
                    <LatestPurchasesItem />
                    <LatestPurchasesItem />
                </ul>
            </div>
        );
    }
}