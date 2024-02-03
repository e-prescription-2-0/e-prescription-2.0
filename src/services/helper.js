import axios from "axios"
import { isEmpty, omit, type } from "ramda"

const baseUrl = "https://e-prescriptions-server.onrender.com"
//const baseUrl = "http://localhost:3030"

const formatParams = (params) => {
  if (!isEmpty(params)) {
    if (typeof params === "object") {
      return JSON.stringify(params)
    }
  }

  return params
}

const serviceBind = (service) => {
  return (params = {}, options = {}) => {
    let { method, url, headers } = service
    let pathParams = []

    headers = {
      ...headers,
      ...options.additionalHeaders,
    }

    url = url.replace(/\{([^\s\:\}]+)?\}/g, function (match, key, format) {
      let value = params[key]

      if (type(value) === "Array") {
        value = value.join(",")
      }

      pathParams.push(key)

      return encodeURIComponent(value)
    })

    if (pathParams.length > 0) {
      params = omit(pathParams, params)
    }

    if (options.handleQuery) {
      url = url + options.handleQuery(params)
    }

    // Build the absolute URL
    url = `${baseUrl}${url}`

    return axios(url, {
      method,
      headers,
      ...(!isEmpty(params) && { data: formatParams(params) }),
    })
      .then((response) =>
        Promise.resolve(
          options.parseResponse
            ? options.parseResponse(response)
            : response.data
        )
      )
      .catch((error) => Promise.reject(error))
  }
}

export default serviceBind
