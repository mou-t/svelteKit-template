import type { requestBody, responseBody } from '../../routes/api/_[id].type'

export type Methods = {
  post: {
    reqBody: requestBody
    resBody: responseBody
  }
}
