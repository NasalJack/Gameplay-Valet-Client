import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import NotesPage from './NotesPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/game/:gameId/notes' render={()=> <NotesPage
    setCurrentGame = {'this.setCurrentGame'}
    title = {'game.title'}
  /> } /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});