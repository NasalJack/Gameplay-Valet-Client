import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GamesListEntry from './GamesListEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><GamesListEntry key={1} id={1} title={'title'} short_description={'short_description'} rating={1} genres={'genres'}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});