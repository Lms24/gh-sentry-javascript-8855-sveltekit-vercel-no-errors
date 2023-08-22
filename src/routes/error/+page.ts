export const load = async ({ fetch }) => {
	const res = await fetch('/api');
	const msg = await res.text();
	return {
		msg
	};
};
