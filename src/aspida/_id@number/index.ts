import type { requestBody, responseBody } from '../../routes/api/[id]'

export type Methods = {
  post: {
    reqBody: requestBody
    resBody: responseBody
  }
}
