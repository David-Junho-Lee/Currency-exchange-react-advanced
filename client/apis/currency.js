import request from 'superagent'

const rootUrl = '/api/v1'

export function getCurrency() {
  return request.get(rootUrl + '/currency').then((res) => {
    return res.text
  })
}
