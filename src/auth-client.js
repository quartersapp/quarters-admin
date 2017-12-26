/* global fetch Promise localStorage */

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest'

const { REACT_APP_API_URL: API_URL } = process.env

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    return fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: params.username,
        password: params.password
      })
    })
      .then(response => {
        if (!response.ok) {
          const msg = response.status === 401
            ? 'Invalid credentials'
            : 'Unknown error'
          return Promise.reject(new Error(msg))
        }

        return response.json()
      })
      .then(body => {
        localStorage.setItem('token', body.token)
      })
  }

  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token')
    return Promise.resolve()
  }

  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params
    if (status === 401 || status === 403) {
      localStorage.removeItem('token')
      return Promise.reject(new Error('Unauthorized'))
    }

    return Promise.resolve()
  }

  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject(new Error('No token'))
  }

  return Promise.reject(new Error('Unknown method'))
}
