import Cookies from 'js-cookie'

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

export const setToken = (token, tokeName = 'token') => {
  Cookies.set(tokeName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
