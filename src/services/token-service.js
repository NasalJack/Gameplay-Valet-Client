import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    console.log('saving token '+token)
    return window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  saveUserId(id) {
    return window.localStorage.setItem(config.USER_ID, id)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  getUserToken() {
    return window.localStorage.getItem(config.USER_ID)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.USER_ID)
    return window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  }
}

export default TokenService;