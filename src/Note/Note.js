import React from 'react'

import './Note.css'

const NotePage = (props) => {

  const {name, info, expanded } = props;

  return (
    <section className="Note">  
      <button className='edit'>{expanded ? 'shrink' : 'expand'}</button>
      <p>{name}</p>
      <p hidden={expanded ? false : true}>{info}</p>
      <button hidden={expanded ? false : true}>Delete</button>
      <button hidden={expanded ? false : true}>Edit</button>
    </section>
  )
}

export default NotePage
