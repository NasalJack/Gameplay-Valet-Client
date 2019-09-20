import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from './LoginPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/login' render={()=> <LoginPage onLoginSuccess={'this.onLoginSuccess'} /> } /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});