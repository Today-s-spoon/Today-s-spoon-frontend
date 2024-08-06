function debounce(callback, timeout = 60000) {
	let timeoutId;

	return (params) => {
		if (timeoutId) {
			window.clearTimeout(timeoutId);
		}

		timeoutId = window.setTimeout(() => {
			callback(params);
		}, timeout);
	};
}

export default debounce;
