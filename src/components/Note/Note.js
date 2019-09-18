import React from 'react'
import { withRouter } from 'react-router-dom';

import ValetApiService from '../../services/valet-api-service';

import './Note.css'

class NotePage extends React.Component {

  state = {
    error: null,
    editing: false,
    note: this.props.note
  }

  handleEditToggle = () => {
    this.setState({editing: !this.state.editing})
  }

  handleEditSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      id: this.state.note.id,
      title: event.target.newTitle.value,
      content: event.target.newContent.value
    }
    ValetApiService.updateNote(newNote, this.props.match.params.gameId)
      .then(() => {
        this.setState({ note: newNote, editing: false })
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {

    const {expandedNote, toggle, handleDelete} = this.props
    const {id, title, content} = this.state.note

    const editForm = 
      <form onSubmit={(event) => this.handleEditSubmit(event)}hidden={expandedNote === id ? false : true} className='edit_form'>
        <label>
          New Title:
          <input type='text' name='newTitle' defaultValue={title} required></input> 
        </label>
        <label>
          New Content:
          <textarea name='newContent' defaultValue={content} required></textarea>
        </label>
        <button type='submit'>Submit</button>
        <button type='button' onClick={this.handleEditToggle}>Cancel</button>
      </form>

    const buttons = 
      <div>
        <button hidden={expandedNote === id ? false : true} onClick={()=>handleDelete(id)}>Delete</button>
        {<button onClick={this.handleEditToggle} hidden={expandedNote === id ? false : true}>Edit</button>}
      </div>        


    return (
      <section className="Note">
        <div className='container'>
          <button className='expand' onClick={()=> toggle(id)}>{expandedNote === id ? '-' : '+'}</button>
          <p className='title'>{title}</p>
        </div>
        <p>{this.state.error}</p>
        <p hidden={expandedNote === id ? false : true}>{content}</p>
        {this.state.editing ? editForm : buttons}
      </section>
    )
  }
}

export default withRouter(NotePage)
