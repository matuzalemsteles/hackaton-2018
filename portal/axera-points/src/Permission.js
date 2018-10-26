import {Config} from 'metal-state';
import {getUserRoles} from './util/LiferayService';
import JSXComponent from 'metal-jsx';
import AppComponent from './AppComponent';

export default class Permission extends JSXComponent {
	static STATE = {
		rules: Config.array().value([]),
	}

	created() {
		getUserRoles(result => this.setState({rules: result}));
	}

	render() {
		const {rules} = this.state;

		if (rules.includes('User') || !window.Liferay) {
			return <AppComponent />;
		}
	}
}