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

import store from './dummy-store'



class App extends React.Component {

  state = {
    loggedIn: false,
    loading: true,
    gamesList: store
  }

  render() {
    return (
      <main role="main" className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/games' render={()=> <GamesListPage list={this.state.gamesList} />}/>
          <Route exact path='/game/:id' render={()=> <GamePage list={this.state.gamesList}/>}/>
          <Route component={PageNotFound} />
        </Switch>
        <Route path='/' component={NavBar} />
        <Route path='/game/:id' component={Footer} />
      </main>
    );
  }
}

export default App;
