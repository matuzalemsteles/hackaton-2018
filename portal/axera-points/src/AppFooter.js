import JSXComponent from 'metal-jsx';

export default class AppComponent extends JSXComponent {  
	render() {
        return (
            <section>
                <h3>Our Company Brands</h3>
                <div class="d-flex p-2 justify-content-around">
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-taf.png" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-gnc.png" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-maxiva.png" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-truekids.png" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                </div>                
            </section>
        );
    }
}