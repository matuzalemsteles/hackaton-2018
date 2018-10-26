import JSXComponent, {Config} from 'metal-jsx';

export default class AppComponent extends JSXComponent {
    static PROPS = {
        name: Config.string(),
        date: Config.string(),
        points: Config.string(),
        imageUrl: Config.string()
    };
    
	render() {
        const {name, points, imageUrl, date} = this.props;
        return (
            <li class="list-group-item list-group-item-flex">
                <div class="autofit-col">
                    <div class="sticker sticker-secondary">
                        <span class="inline-item">
                            <img style="height:42px; width:42px" aria-hidden="true" class="lexicon-icon lexicon-icon-folder" src={imageUrl}/>
                        </span>
                    </div>
                </div>
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        <h4 class="list-group-title">
                            <span href="#1">{name}</span>
                        </h4>
                        <p class="list-group-subtext">{points} pontos</p>
                    </section>
                </div>
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        <h5 class="list-group-title text-right">
                            <span href="#1" class="text-right">Data da compra</span>
                        </h5>
                        <p class="list-group-subtext text-right">{date}</p>
                    </section>
                </div>
            </li>
        );
    }
}