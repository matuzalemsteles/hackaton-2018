import JSXComponent from 'metal-jsx';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <li class="list-group-item list-group-item-flex">
                <div class="autofit-col">
                    <div class="sticker sticker-secondary">
                        <span class="inline-item">
                            <img aria-hidden="true" class="lexicon-icon lexicon-icon-folder" src="https://www.truekids.com.mx/documents/754225/756570/881924-600/81b5dbc5-8340-4453-b97f-8486dd03f63f?t=1521814261000"/>
                        </span>
                    </div>
                </div>
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        <h4 class="list-group-title">
                            <a href="#1">Account Example One</a>
                        </h4>
                        <p class="list-group-subtext">List Group Subtext</p>
                    </section>
                </div>
            </li>
        );
    }
}