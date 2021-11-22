/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './_id@number'
// prettier-ignore
import type { Methods as Methods1 } from './getapi'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/getapi'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _id: (val0: number) => {
      const prefix0 = `/${val0}`

      return {
        post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, prefix0, POST, option).json(),
        $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, prefix0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    getapi: {
      get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
