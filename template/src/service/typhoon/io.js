import request from 'utils/request.js'

let baseUrl = 'server'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:5678/data/vue-webpack/'
}

export default {
  async init () {
    /* istanbul ignore next */
    return request(`${baseUrl}init.json`, 'POST', {
      foo: 'bar',
    })
  },
}
