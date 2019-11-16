import TokenService from './token-service';
import config from '../config';

const ValetApiService = {
  url: config.API_ENDPOINT,

  getAllGames() {
    return fetch(`${this.url}/games`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  getGame(gameId) {
    return fetch(`${this.url}/games/${gameId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  getMyGames() {
    return fetch(`${this.url}/games/user/${TokenService.getUserToken()}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  getNotes(gameId) {
    return fetch(`${this.url}/game/${gameId}/user/${TokenService.getUserToken()}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  addNote(note, gameId) {
    return fetch(`${this.url}/game/${gameId}/user/${TokenService.getUserToken()}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(note)
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  deleteNote(id, gameId) {
    return fetch(`${this.url}/game/${gameId}/user/${TokenService.getUserToken()}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ id })
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res)

  },
  updateNote(note, gameId) {
    return fetch(`${this.url}/game/${gameId}/user/${TokenService.getUserToken()}`, { 
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(note)
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res)
  },
  checkGameListStatus(gameId) {
    const userToken = TokenService.getUserToken();
    const authToken = TokenService.getAuthToken();
    return fetch(`${this.url}/junction/user/${userToken}/game/${gameId}`, {
      headers: {
        'authorization': `bearer ${authToken}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  addGameToList(gameId) {
    const userToken = TokenService.getUserToken();
    const authToken = TokenService.getAuthToken();
    if (userToken === null) return
    return fetch(`${this.url}/junction/user/${userToken}/game/${gameId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${authToken}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  removeGameFromList(gameId) {
    const userToken = TokenService.getUserToken();
    const authToken = TokenService.getAuthToken();
    if (userToken === null) return
    return fetch(`${this.url}/junction/user/${userToken}/game/${gameId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${authToken}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  }


}

ValetApiService.getAllGames();

export default ValetApiService;