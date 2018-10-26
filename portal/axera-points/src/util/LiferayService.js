const userId = window.themeDisplay && window.themeDisplay.getUserId() || null;

export const service = (path, params, callback) => {
	if (window.Liferay) {
		window.Liferay.Service(path, params, callback);
	}
}

export const getUserRoles = (callback) => {
	service('/role/get-user-roles', {userId}, (result) => {
		callback(
			result.map(item => item.name)
		);
	});
};