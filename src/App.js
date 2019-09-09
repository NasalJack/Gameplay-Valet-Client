import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'normalize.css'
import './App.css';

import LandingPage from './LandingPage/LandingPage';
import PageNotFound from './PageNotFound/PageNotFound';
import NavBar from './NavBar/NavBar';
import GamesListPage from './GamesListPage/GamesListPage';
import GamePage from './GamePage/GamePage';
import Footer from './Footer/Footer';
import RulesPage from './RulesPage/RulesPage';
import TipsPage from './TipsPage/TipsPage';
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/SignupPage';
import NotesPage from './NotesPage/NotesPage';

import store from './dummy-store'



class App extends React.Component {

  state = {
    loggedIn: false,
    loading: true,
    gamesList: store.games
  }

  render() {
    return (
      <main role="main" className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
          <Route exact path='/games' render={()=> <GamesListPage list={this.state.gamesList} />}/>
          <Route exact path='/game/:id' render={()=> <GamePage list={this.state.gamesList}/>}/>
          <Route exact path='/game/:id/rules' component={RulesPage} />
          <Route exact path='/game/:id/tips' component={TipsPage} />
          <Route exact path='/game/:id/notes/:userId' component={NotesPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Route path='/' component={NavBar} />
        <Route path='/game/:id' component={Footer} />
      </main>
    );
  }
}

export default App;
