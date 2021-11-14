import type { requestBody, responseBody } from '../../src/routes/api/[id]'

export type Methods = {
  post: {
    reqBody: requestBody
    resBody: responseBody
  }
}
