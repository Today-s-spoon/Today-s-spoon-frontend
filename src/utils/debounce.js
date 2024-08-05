function debounce(callback, timeout = 250) {
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
