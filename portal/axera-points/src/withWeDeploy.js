import {Config} from 'metal-state';
import JSXComponent from 'metal-jsx';
import WeDeploy from 'wedeploy';

export default function(WrapperComponent) {
	class WithWeDeploy extends JSXComponent {
		static PROPS = {
			portletNamespace: Config.string().value('(unknown portletNamespace)'),
			contextPath: Config.string().value('(unknown contextPath)'),
			portletElementId: Config.string().value('(unknown portletElementId)'),
			userId: Config.string().value('123123'),
		};

		static STATE = {
			data: Config.any(),
			error: Config.any().value({
				errors: [],
			}),
		}

		/**
		 * WeDeploy data consumer
		 */
		attached() {
			WeDeploy
				.data('data-hackathon.wedeploy.io')
				.where("customer", "=", this.props.userId)
				.get('/points')
				.then(res => this.setState({data: res}))
				.catch(res => this.setState({error: res}));
		}

		/**
		 * @inheritDoc
		 */
		render() {
			const {error, data} = this.state;

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
				<WrapperComponent data={data} {...this.props}>{this.props.children}</WrapperComponent>
			);
		}
	}

	return WithWeDeploy;
};
