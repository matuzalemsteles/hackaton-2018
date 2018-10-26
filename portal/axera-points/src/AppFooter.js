import JSXComponent from 'metal-jsx';
//<h3>Our Company Brands</h3>

export default class AppComponent extends JSXComponent {  
	render() {
        return (
            <section>
                <div class="d-flex p-2 justify-content-around">
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-taf.png" style="height:120px" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-gnc.png" style="height:120px" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-maxiva.png" style="height:120px" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                    <div class="d-inline-flex p-2 bd-highlight">
                        <img src="/o/axera/images/asset-truekids.png" style="height:120px" class="img-fluid img-thumbnail" alt="Responsive image"/>
                    </div>
                </div>                
            </section>
        );
    }
}