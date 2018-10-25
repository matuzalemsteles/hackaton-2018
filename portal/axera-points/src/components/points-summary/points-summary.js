import JSXComponent from 'metal-jsx';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div class="panel panel-secondary">
                <div class="panel-header">
                    <div class="panel-title">Total Pontos</div>
                </div>
                <div class="panel-body">
                    12000
                </div>
                <div class="panel-footer">
                    <a href="#">Ver extrato</a>
                </div>
            </div>
        );
    }
}