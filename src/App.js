import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'normalize.css'
import './App.css';

import LandingPage from './LandingPage/LandingPage';
import PageNotFound from './PageNotFound/PageNotFound';
import NavBar from './NavBar/NavBar';
import store from './dummy-store'



class App extends React.Component {

  state = {
    loggedIn: false,
    loading: true,
    gameList: store
  }

  render() {
    return (
      <main role="main" className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Route path='/' component={NavBar} />
      </main>
    );
  }
}

export default App;
