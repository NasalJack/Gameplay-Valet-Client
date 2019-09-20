import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import RulesPage from './RulesPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/game/:id/rules' render={()=> <RulesPage
    setCurrentGame = {'this.setCurrentGame'}
    title = {'game.title'}
    rules={'game.rules'}
    id={1}
  />} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});