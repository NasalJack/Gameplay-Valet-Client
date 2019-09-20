import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import SignupPage from './SignupPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route exact path='/signup' component={SignupPage} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});