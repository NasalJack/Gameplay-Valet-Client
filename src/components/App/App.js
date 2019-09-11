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

import store from '../../dummy-store'



class App extends React.Component {

  state = {
    loggedIn: false,
    loading: true,
    gamesList: store.games,
    currentGame: {
      rating: null, 
      genres: null,
      long_description: null,
      title: null
    }
  }

  componentDidMount() {
    ValetApiService.getAllGames()
      .then(games => {this.setState({gamesList: games})})
    const haveToken = TokenService.hasAuthToken()
    if (haveToken) return this.setState({loggedIn: true})
    else return this.setState({loggedIn: false})
  }

  setCurrentGame = (game) => {
    this.setState({currentGame: game})
  }

  onLoginSuccess = () => {
    console.log('logging in')
    this.setState({loggedIn: true})
  }

  onLogout = () => {
    TokenService.clearAuthToken();
    this.setState({loggedIn: false})
  }

  render() {
    const game = this.state.currentGame;
    return (
      <main role="main" className="App">
        <Switch>
          <Route exact path='/' render={()=> <LandingPage loggedIn={this.state.loggedIn}/> } />
          <Route exact path='/login' render={()=> <LoginPage onLoginSuccess={this.onLoginSuccess} /> } />
          <Route exact path='/signup' component={SignupPage} />
          <Route exact path='/games' render={()=> <GamesListPage list={this.state.gamesList} />}/>
          <Route exact path='/games/:userId' render={()=> <MyGamesPage list={this.state.gamesList} />}/>
          <Route exact path='/game/:id' render={()=> <GamePage 
            setCurrentGame = {this.setCurrentGame}
            id = {game.id}
            title = {game.title}
            long_description = {game.long_description}
            genres = {game.genres}
            rating = {game.rating}
          />}/>
          <Route exact path='/game/:id/rules' render={()=> <RulesPage
            setCurrentGame = {this.setCurrentGame}
            rules={game.rules}
            id={game.id}
          />} />
          <Route exact path='/game/:id/tips' render={()=> <TipsPage 
            setCurrentGame = {this.setCurrentGame}
            tips={game.tips}
            id={game.id}
          />}/>
          <Route exact path='/game/:id/notes/:userId' component={NotesPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Route path='/' render={()=> <NavBar loggedIn={this.state.loggedIn} logout={this.onLogout}/>} />
        <Route path='/game/:id' component={Footer} />
      </main>
    );
  }
}

export default App;
