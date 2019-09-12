import React from 'react'

import './Note.css'

const NotePage = (props) => {

  const {id, title, content} = props.note;
  const { expandedNote, toggle } = props

  return (
    <section className="Note">  
      <button className='edit' onClick={()=> toggle(id)}>{expandedNote === id ? 'shrink' : 'expand'}</button>
      <p>{title}</p>
      <p hidden={expandedNote === id ? false : true}>{content}</p>
      <button hidden={expandedNote === id ? false : true} onClick={()=>props.handleDelete(id)}>Delete</button>
      <button hidden={expandedNote === id ? false : true}>Edit</button>
    </section>
  )
}

export default NotePage
