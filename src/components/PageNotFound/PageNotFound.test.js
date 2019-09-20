import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import PageNotFound from './PageNotFound';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Route component={PageNotFound} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});