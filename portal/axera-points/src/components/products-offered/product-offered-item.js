import JSXComponent, {Config} from 'metal-jsx';

export default class AppComponent extends JSXComponent {
	static PROPS = {
        discount: Config.string(),
        name: Config.string(),
        value: Config.string(),
        imageUrl: Config.string()
	};

    render() {
        const {discount, name, value, imageUrl, height} = this.props;
        return (
            <div class="col-md-4">
                <div class="card card-type-asset">
                    <div class="aspect-ratio bg-checkered card-item-first">
                        <img alt="thumbnail" height={height || 150} class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src={imageUrl} />
                    </div>
                    {(discount) ?
                            <span class="badge badge-danger" style="position:absolute;top:10px;right:-15px">
                                <span class="badge-item badge-item-expand">{discount}% OFF</span>
                            </span>
                        : <div></div>
                    }
                    <div class="card-body">
                        <div class="card-row">
                            <div class="autofit-col autofit-col-expand">
                                <div class="card-title text-truncate" title="thumbnail_coffee.jpg">{name}</div>
                                <div class="card-subtitle text-truncate" title="Author Action">{value}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}