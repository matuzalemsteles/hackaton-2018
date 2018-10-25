import JSXComponent from 'metal-jsx';
import LatestPurchasesItem from './latest-purchases-item';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div>
                <h3>Ultimas compras</h3>
                <ul class="list-group">
                    <LatestPurchasesItem />
                </ul>
            </div>
        );
    }
}