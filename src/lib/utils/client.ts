import aspida from '@aspida/fetch';
import type { FetchConfig } from '@aspida/fetch';
import api from '../../../aspida/$api';

const fetchConfig: FetchConfig = {
	baseURL: '/api',
	throwHttpErrors: true // throw an error on 4xx/5xx, default is false
};

type Aspida = typeof aspida;
type Fetch = Parameters<Aspida>[0];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore pnpm previewの時に、aspida is not a functionというエラーが発生する。
const callableAspida = typeof aspida === 'function' ? aspida : (aspida.default as Aspida);

/**
 * aspidaクライアント
 * @param {Fetch} f - svelteKit load関数の中で使用する場合は、load関数の引数fetchを入れてください
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const client = (f: Fetch = fetch) => api(callableAspida(f, fetchConfig));
