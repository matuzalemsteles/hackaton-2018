import JSXComponent from 'metal-jsx';

export default class AppComponent extends JSXComponent {
	render() {
        return (
            <li class="list-group-item list-group-item-flex">
                <div class="autofit-col">
                    <div class="sticker sticker-secondary">
                        <span class="inline-item">
                            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
                                <use href="/images/icons/icons.svg#folder" />
                            </svg>
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