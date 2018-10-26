import JSXComponent from 'metal-jsx';
import LatestPurchasesItem from './latest-purchases-item';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div>
                <h3>Latest Purchases</h3>
                <div class="">
                    <table class="table table-autofit">
                        <tbody>
                            <LatestPurchasesItem name="Sapato 1" date="26/09/2018" points="200" imageUrl="https://www.truekids.com.mx/documents/754225/756570/881924-600/81b5dbc5-8340-4453-b97f-8486dd03f63f?t=1521814261000" />
                            <LatestPurchasesItem name="Nutriente 1" date="25/09/2018" points="102" imageUrl="https://gnc.com.mx/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/n/gnc-mega-men-100109024-a_1.jpg" />
                            <LatestPurchasesItem  name="Sapato 2" date="24/09/2018" points="54" imageUrl="https://www.truekids.com.mx/documents/754225/756636/CQ2361/e7dff1dc-f11c-408f-a7a1-c1e9f222f0e6?t=1521754499000" />
                        </tbody>
                    </table>
                    <div class="sheet-footer">
                        <h5>
                            <a href="#">See All Purchase Summary</a>
                        </h5>
	                </div>
                </div>

            </div>
        );
    }
}