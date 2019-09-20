import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Note from './Note';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Note
    key={1}
    note={'note'}
    expandedNote={'expandedNote'}
    toggle={'this.toggleNoteExpansion'}
    handleDelete={'this.handleDelete'}
  /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});