import {Config} from 'metal-state';
import JSXComponent from 'metal-jsx';
import WeDeploy from 'wedeploy/build/browser/api-min';

export default function(WrapperComponent) {
	class WithWeDeploy extends JSXComponent {
		static STATE = {
			data: Config.any().value([]),
			suggestions: Config.any().value([]),
			error: Config.any().value({
				errors: [],
			}),
		}

		/**
		 * WeDeploy data consumer
		 */
		created() {
			const userId = window.themeDisplay && window.themeDisplay.getUserName() || '20139';

			WeDeploy
				.data('data-hackathon.wedeploy.io')
				.where("customerId", "=", userId)
				.get('/points')
				.then(res => {this.state.data = res})
				.catch(res => {this.state.error = res});

			WeDeploy
				.data('data-hackathon.wedeploy.io')
				.where("userName", "=", userId)
				.limit(3)
				.get('/suggestions')
				.then(res => {this.state.suggestions = res})
				.catch(res => {this.satte.error = res});
		}

		/**
		 * @inheritDoc
		 */
		render() {
			const {error, data, suggestions} = this.state;

			if (error.errors.length) {
				return (
					<div>
						<h1>Error {error.code}</h1>
						{error.errors.map((item, index) => (
							<p key={index}>{item.message}</p>
						))}
					</div>
				)
			}

			return (
				<WrapperComponent data={data} suggestions={suggestions}>{this.props.children}</WrapperComponent>
			);
		}
	}

	return WithWeDeploy;
};
