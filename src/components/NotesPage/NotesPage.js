import React from 'react';
import { withRouter } from 'react-router-dom';

import Note from '../Note/Note';
import ValetApiService from '../../services/valet-api-service';

import './NotesPage.css';

class NotesPage extends React.Component {

  state = {
    error: null,
    loading: true,
    notes: [],
    expandedNote: null,
    addingNote: false
  }

  componentDidMount() {
    ValetApiService.getNotes(this.props.match.params.gameId)
      .then(notes => this.setState({ notes }))
  }

  toggleNoteExpansion = (id) => {
    if(id === this.state.expandedNote) return this.setState({expandedNote: null})
    return this.setState({expandedNote: id})
  }

  toggleNoteAdder = () => {
    this.setState({addingNote: !this.state.addingNote})
  }

  handleNoteSubmit = (event) => {
    event.preventDefault();

    const note = {
      title: event.target.title.value,
      content: event.target.content.value
    }

    ValetApiService.addNote(note, this.props.match.params.gameId)
      .then((newNote) => {
        this.setState({notes: [...this.state.notes, newNote], addingNote: false})
      })
      .catch(res => this.setState({ error: res.error }))
  }

  handleDelete = (id) => {
      ValetApiService.deleteNote(id, this.props.match.params.gameId)
        .then(() => {
          const newNotes = this.state.notes.filter(note => note.id !== id)
          this.setState({notes: newNotes})
        })
        .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const { notes, expandedNote } = this.state
    const noteList = [];
    if (notes.length) notes.forEach(note => noteList.push(<Note
      key={note.id}
      note={note}
      expandedNote={expandedNote}
      toggle={this.toggleNoteExpansion}
      handleDelete={this.handleDelete}
    />))

    const noteAdderForm =  
    <form className="note_adder" onSubmit={(event) => this.handleNoteSubmit(event)}>
      <label>
        title:
        <input name='title' type='text' required></input>
      </label>
      <label>
        content:
        <textarea name='content' required></textarea>
      </label>
      <button type='submit'>Add Note</button>
      <button type='button' onClick={this.toggleNoteAdder}>Cancel</button>
    </form>

    return (
      <div className='NotesPage'>
        <header className="banner" role="banner">
              <h1>All Games</h1>
              <p>{this.state.error}</p>
          </header>
          
          {notes.length ? noteList : 'No notes yet'}

          <section>
              {!this.state.addingNote ? <button onClick={this.toggleNoteAdder}>Add Note</button> : noteAdderForm}
          </section>
      </div>
    )
  }
}

export default withRouter(NotesPage)
