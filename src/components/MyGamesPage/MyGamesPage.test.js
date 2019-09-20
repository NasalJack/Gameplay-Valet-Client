import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import MyGamesPage from './MyGamesPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/mygames' render={()=> <MyGamesPage list={'this.state.myGamesList'} setMyGames={'this.setMyGames'}/>}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});