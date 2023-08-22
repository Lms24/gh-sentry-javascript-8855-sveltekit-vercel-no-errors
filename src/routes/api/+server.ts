import { captureException } from '@sentry/sveltekit';

export const GET = async () => {
	captureException(new Error('Manually captured API Route Error'));

	throw new Error('Sentry Example API Route Error');

	return { msg: 'Hello from the API' };
};
