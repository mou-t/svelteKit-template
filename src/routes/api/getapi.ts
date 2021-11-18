import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<unknown, unknown, ResponseBody> = () => {
	return {
		body: {
			text: 'get api response'
		}
	};
};

export type ResponseBody = {
	text: string;
};
