import 'whatwg-fetch'

const verbs = {
  GET (url) {
    return fetch(url, {
      credentials: 'same-origin',
    })
  },

  POST (url, params) {
    return fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  },
}

const request = (url, method = 'GET', params = {}) => {
  return verbs[method](url, params)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return {
          success: false,
          errCode: 'FETCH_ERROR',
          errMsg: 'Fetch Error',
        }
      }
    }).catch(e => {
      return {
        success: false,
        errCode: 'FETCH_ERROR',
        errMessage: 'Fetch Error',
      }
    })
}

export default (url, method = 'GET', params = {}) => {
  if (!navigator.onLine) {
    return {
      success: false,
      errCode: 'NETWORK_OFFLINE',
      errMsg: 'Network Offline',
    }
  }

  let timeHandle
  const timeout = 5 * 1000
  const promiseTimeout = new Promise(resolve => {
    timeHandle = setTimeout(() => {
      resolve({
        success: false,
        errCode: 'REQUEST_TIMEOUT',
        errMsg: 'Request Timeout',
      })
    }, timeout)
  })

  return Promise.race([
    request(url, method, params).then(result => {
      clearTimeout(timeHandle)
      return result
    }),
    promiseTimeout,
  ])
}

