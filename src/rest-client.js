/* global localStorage Headers Promise */

import { fetchUtils } from 'admin-on-rest'
import qs from 'qs'

const makeRequest = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }

  const token = localStorage.getItem('token')

  options.headers.set('Authorization', `Bearer ${token}`)
  return fetchUtils.fetchJson(url, options)
}

const { REACT_APP_API_URL: API_URL } = process.env

export default (type, resource, params) => {
  const baseUrl = `${API_URL}/admin/${resource}`

  switch (type) {
    case 'GET_LIST':
      return makeRequest(`${baseUrl}?${qs.stringify({
        page: params.pagination.page,
        perPage: params.pagination.perPage,
        sort: params.sort.field,
        order: params.sort.order,
        filter: params.filter
      })}`).then(response => response.json)
    case 'GET_MANY':
      return makeRequest(`${baseUrl}?${qs.stringify({
        ids: params.ids
      })}`).then(response => response.json)
    case 'GET_ONE':
      return makeRequest(`${baseUrl}/${params.id}`)
        .then(response => response.json)
    case 'CREATE':
      return makeRequest(baseUrl, {
        method: 'POST',
        body: JSON.stringify(params.data)
      }).then(response => response.json)
    case 'UPDATE':
      return makeRequest(`${baseUrl}/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(params.data)
      }).then(response => response.json)
    case 'DELETE':
      return makeRequest(`${baseUrl}/${params.id}`, {
        method: 'DELETE'
      }).then(() => ({ data: {} }))
    default:
      return Promise.reject(new Error('Unimplemented'))
  }
}
