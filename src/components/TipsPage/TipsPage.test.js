import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import TipsPage from './TipsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/game/:id/tips' render={()=> <TipsPage 
    setCurrentGame = {'this.setCurrentGame'}
    title = {'game.title'}
    tips={'game.tips'}
    id={'game.id'}
  />}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});