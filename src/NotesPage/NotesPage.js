import React from 'react';

import Note from '../Note/Note';

import './NotesPage.css';

import store from '../dummy-store';

class NotesPage extends React.Component {

  state = {
    notes: store.notes
  }

  render() {
    const noteList = [];
    this.state.notes.forEach(note => noteList.push(<Note name={note.name} info={note.info} expanded={note.expanded}/>))
    return (
      <div className='NotesPage'>
        <header className="banner" role="banner">
              <h1>All Games</h1>
          </header>
          
          {noteList}

          <section>
              <button>Add Note</button>
          </section>
      </div>
    )
  }
}

export default NotesPage
