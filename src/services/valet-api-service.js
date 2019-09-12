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
    return fetch (`${this.url}/game/${gameId}/user/${TokenService.getUserToken()}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  addNote() {

  },
  deleteNote() {

  },
  updateNote() {

  },
  addGameToList() {

  },
  removeGameFromList() {

  }


}

ValetApiService.getAllGames();

export default ValetApiService;