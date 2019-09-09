import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import './GamePage.css'

class GamePage extends React.Component {

  render() {
    const game = this.props.list[this.props.match.params.id]
    const genres = [];
    game.genres.forEach(genre => genres.push(<li key={genre}>{genre}</li>))
    const route = this.props.match.params.id

    return (
      <div className='GamePage'>
        <header className="banner" role="banner">
          <h1>{game.title}</h1>
          <div>rating: {game.rating}</div>
          <ul>{genres}</ul>
        </header>

        <section>{game.longDescription}</section>

        <section>
            {/* <button>Quick Rules</button> */}
            <div className='button-box'>
              <Link to={route+'/rules'}>
                <button>Rules</button>
              </Link>
              <Link to={route+'/tips'}>
                <button>Tips</button>
              </Link>
            </div>
            <div className='button-box'>
              <Link to={route+'/notes'}>
                <button>Notes</button>
              </Link>
              <button>Add/remove</button>
            </div>
        </section>
      </div>
    )
  }
}

export default withRouter(GamePage)
