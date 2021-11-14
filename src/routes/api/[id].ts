import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler<unknown, requestBody, responseBody> = ({ body, params }) => {
	const { id: idBody } = body;
	const { id } = params;
	return {
		body: {
			text: 'params ' + id + ' body ' + idBody.toString() + ' api response '
		}
	};
};

export type requestBody = {
	id: number;
};

export type responseBody = {
	text: string;
};
