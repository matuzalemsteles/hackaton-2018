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
            <tr>
                <td>
                    <img style="height:42px; width:42px" aria-hidden="true" class="lexicon-icon lexicon-icon-folder" src={imageUrl}/>
                </td>
                <td class="table-cell-expand">
                    <div class="table-title">Product</div>
                    <div>{name}</div>
                </td>
                <td class="table-cell-expand">
                    <div class="table-title">Score</div>
                    <div>{points}</div>
                </td>
                <td class="table-cell-expand">
                    <div class="table-title text-right">Purchase Date</div>
                    <div class="text-right">{date}</div>
                </td>
            </tr>
        );
    }
}