import JSXComponent from 'metal-jsx';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <div class="sheet sheet-summary">
                <p>Total de Pontos</p>
                <h1>12000</h1>
                <a class="link" href="#">
                    Ver extrato
                    <svg id="caret" viewBox="9 7 6 10" width="100%" height="100%">
                        <polyline
                            fillRule="evenodd" 
                            fill="none" 
                            points="10 8 14 12 10 16" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            stroke="currentColor">
                        </polyline> 
                    </svg>
                </a>
            </div>
        );
    }
}