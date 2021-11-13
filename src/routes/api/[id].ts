import type { RequestHandler } from '@sveltejs/kit';
import type { requestBody, responseBody } from './_[id].type';

export const post: RequestHandler<unknown, requestBody, responseBody> = ({ body, params }) => {
	const { id: idBody } = body;
	const { id } = params;
	return {
		body: {
			text: 'params ' + id + ' body ' + idBody.toString() + ' api response '
		}
	};
};
