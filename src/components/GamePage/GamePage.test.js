import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import GamePage from './GamePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/game/:id' render={()=> <GamePage 
    setCurrentGame = {this.setCurrentGame}
    id = {1}
    title = {'title'}
    long_description = {'game.long_description'}
    genres = {'game.genres'}
    rating = {1}
    setMyGames = {'this.setMyGames'}
  />}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});