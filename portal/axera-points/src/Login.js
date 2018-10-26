import {Config} from 'metal-state';
import JSXComponent from 'metal-jsx';

export default class Login extends JSXComponent {
	render() {
		return (
			<div class="sheet-login">
				<div class="sheet">
					<div class="sheet-header">
						<h2 class="sheet-title">Login</h2>
					</div>
					<div class="sheet-section">
						<div class="form-group">
							<label for="basicInputTypeText">Tax ID</label>
							<input class="form-control" id="basicInputTypeText" placeholder="Tax ID" type="text"/>
						</div>
						<div class="form-group">
							<label for="passwordFieldHidden">Password</label>
							<div class="input-group input-group-password">
								<div class="input-group-item">
									<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<button class="btn btn-primary" type="button">Sign In</button>
							<button class="btn btn-link" type="button">Create Account</button>
						</div>

					</div>
				</div>
			</div>
		);
	}
}