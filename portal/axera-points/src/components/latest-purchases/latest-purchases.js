import JSXComponent from 'metal-jsx';
import LatestPurchasesItem from './latest-purchases-item';

export default class AppComponent extends JSXComponent {
	render() {
        const {data} = this.props;

        return (
            <div>
                <h3>Latest Purchases</h3>
                <div class="">
                    <table class="table table-autofit">
                        <tbody>
                            {data.map(item => (
                                <LatestPurchasesItem name={item.productName} date={item.date} points={item.points} />
                            ))}
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