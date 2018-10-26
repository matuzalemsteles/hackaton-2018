export const service = (path, params, callback) => {
	if (window.Liferay) {
		window.Liferay.Service(path, params, callback);
	}
}

export const getUserRoles = (callback) => {
	const userId = window.themeDisplay && window.themeDisplay.getUserId() || '20139';

	service('/role/get-user-roles', {userId}, (result = []) => {
		if (typeof result === 'string') {
			callback([]);
		} else {
			callback(
				result.map(item => item.name)
			);
		}
	});
};