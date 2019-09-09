import React from 'react'
import { withRouter } from 'react-router-dom';

import './GamePage.css'

class GamePage extends React.Component {

  render() {
    const game = this.props.list[this.props.match.params.id]
    const genres = [];
    game.genres.forEach(genre => genres.push(<li>{genre}</li>))

    return (
      <div className='GamePage'>
        <header className="banner" role="banner">
          <h1>{game.title}</h1>
          <div>rating: {game.rating}</div>
          <ul>{genres}</ul>
        </header>

        <section>{game.longDescription}</section>

        <section>
            <button>Quick Rules</button>
            <div className='button-box'>
              <button>Full Rules</button>
              <button>Tips</button>
            </div>
            <div className='button-box'>
              <button>Notes</button>
              <button>Add/remove</button>
            </div>
        </section>
      </div>
    )
  }
}

export default withRouter(GamePage)
