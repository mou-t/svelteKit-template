import type { requestBody, responseBody } from '../../src/routes/api/_[id].type'

export type Methods = {
  post: {
    reqBody: requestBody
    resBody: responseBody
  }
}
