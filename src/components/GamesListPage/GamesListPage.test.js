import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import GamesListPage from './GamesListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/games' render={()=> <GamesListPage
    list={'this.state.gamesList'}
    sortList = {'this.sortList'}
    filterList = {'this.filterList'}
    filterFor = {'this.state.filterFor'}
  />}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});