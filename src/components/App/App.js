import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'normalize.css'
import './App.css';

import LandingPage from '../LandingPage/LandingPage';
import PageNotFound from '../PageNotFound/PageNotFound';
import NavBar from '../NavBar/NavBar';
import GamesListPage from '../GamesListPage/GamesListPage';
import GamePage from '../GamePage/GamePage';
import Footer from '../Footer/Footer';
import RulesPage from '../RulesPage/RulesPage';
import TipsPage from '../TipsPage/TipsPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import NotesPage from '../NotesPage/NotesPage';
import MyGamesPage from '../MyGamesPage/MyGamesPage';
import ValetApiService from '../../services/valet-api-service';
import TokenService from '../../services/token-service'



class App extends React.Component {

  state = {
    loggedIn: false,
    loading: true,
    gamesList: [],
    myGamesList: [],
    currentGame: {
      rating: null, 
      genres: null,
      long_description: null,
      title: null
    },
    filterFor: ''
  }

  componentDidMount() {
    ValetApiService.getAllGames()
      .then(games => {this.setState({gamesList: games})})
    const haveToken = TokenService.hasAuthToken()
    if (haveToken) {
      this.setState({loggedIn: true})
      this.setMyGames()
    }
    else return this.setState({loggedIn: false})
  }

  setCurrentGame = (game) => {
    this.setState({currentGame: game})
  }

  onLoginSuccess = () => {
    this.setState({loggedIn: true})
    this.setMyGames()
  }

  onLogout = () => {
    TokenService.clearAuthToken();
    this.setState({loggedIn: false})
  }

  setMyGames = () => {
    ValetApiService.getMyGames()
      .then(games => {
        const myGamesList = games.filter(game => game.deleted !== true)
        this.setState({ myGamesList })
      })
  }

  sortList = (event) => {
    let sortedList
    const sortBy = event.target.value;
    if (sortBy === 'rating') sortedList = [...this.state.gamesList].sort((a, b) => (a[sortBy] > b[sortBy]) ? -1 : 1)
    else sortedList = [...this.state.gamesList].sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
    this.setState({ gamesList: sortedList })
  }

  filterList = (event) => {
    this.setState({ filterFor: event.target.value})
  }


  render() {
    const game = this.state.currentGame;
    return (
      <main role="main" className="App">
        <Switch>
          <Route exact path='/' render={()=> <LandingPage loggedIn={this.state.loggedIn}/> } />
          <Route exact path='/login' render={()=> <LoginPage onLoginSuccess={this.onLoginSuccess} /> } />
          <Route exact path='/signup' component={SignupPage} />
          <Route exact path='/games' render={()=> <GamesListPage
            list={this.state.gamesList}
            sortList = {this.sortList}
            filterList = {this.filterList}
            filterFor = {this.state.filterFor}
          />}/>
          <Route exact path='/games/:userId' render={()=> <MyGamesPage list={this.state.myGamesList} setMyGames={this.setMyGames}/>}/>
          <Route exact path='/game/:id' render={()=> <GamePage 
            setCurrentGame = {this.setCurrentGame}
            id = {game.id}
            title = {game.title}
            long_description = {game.long_description}
            genres = {game.genres}
            rating = {game.rating}
            setMyGames = {this.setMyGames}
          />}/>
          <Route exact path='/game/:id/rules' render={()=> <RulesPage
            setCurrentGame = {this.setCurrentGame}
            title = {game.title}
            rules={game.rules}
            id={game.id}
          />} />
          <Route exact path='/game/:id/tips' render={()=> <TipsPage 
            setCurrentGame = {this.setCurrentGame}
            title = {game.title}
            tips={game.tips}
            id={game.id}
          />}/>
          <Route exact path='/game/:gameId/notes/:userId' render={()=> <NotesPage
            setCurrentGame = {this.setCurrentGame}
            title = {game.title}
          /> } />
          <Route component={PageNotFound} />
        </Switch>
        <Route path='/' render={()=> <NavBar logout={this.onLogout}/>} />
        <Route path='/game/:id' component={Footer} />
      </main>
    );
  }
}

export default App;
