import React from 'react'

const NotesPage = () => {
  return (
    <div className='NotesPage'>
      <header class="banner" role="banner">
            <h1>All Games</h1>
        </header>
        <section>
          <button class='edit'>expand</button>
            Note #1
        </section>
        <section>
            <button class='edit'>shrink</button>
            <p>Note #2</p>
            <p>Additional info here</p>
            <button>Delete</button>
            <button>Edit</button>
        </section>
        <section>
            <button class='edit'>expand</button>
            Note #3
        </section>
        <section>
            <button class='edit'>expand</button>
            Note #4
        </section>
        <section>
            <button class='edit'>expand</button>
            Note #5
        </section>
        <section>
            <button class='edit'>expand</button>
            Note #6
        </section>
        <section>
            <button>Add Note</button>
        </section>
    </div>
  )
}

export default NotesPage
