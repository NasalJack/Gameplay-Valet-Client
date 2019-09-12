import React from 'react';
import { withRouter } from 'react-router-dom';

import Note from '../Note/Note';
import ValetApiService from '../../services/valet-api-service';

import './NotesPage.css';

class NotesPage extends React.Component {

  state = {
    loading: true,
    notes: []
  }

  componentDidMount() {
    console.log('getting notes')
    ValetApiService.getNotes(this.props.match.params.gameId)
      .then(notes => this.setState({ notes }))
  }

  render() {
    const { notes } = this.state
    const noteList = [];
    if (notes.length) notes.forEach(note => noteList.push(<Note key={note.id} name={note.title} info={note.content} expanded={note.expanded}/>))
    return (
      <div className='NotesPage'>
        <header className="banner" role="banner">
              <h1>All Games</h1>
          </header>
          
          {notes.length ? noteList : 'No notes yet'}

          <section>
              <button>Add Note</button>
          </section>
      </div>
    )
  }
}

export default withRouter(NotesPage)
