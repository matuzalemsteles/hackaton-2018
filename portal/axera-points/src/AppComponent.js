import {Config} from 'metal-state';
import JSXComponent from 'metal-jsx';
import withWeDeploy from './withWeDeploy';

class AppComponent extends JSXComponent {
    static PROPS = {
        portletNamespace: Config.string().value('(unknown portletNamespace)'),
        contextPath: Config.string().value('(unknown contextPath)'),
        portletElementId: Config.string().value('(unknown portletElementId)'),
        data: Config.any(),
    }

	render() {
        return (
            <div>
				
			</div>
        );
    }
}

export default withWeDeploy(AppComponent);
