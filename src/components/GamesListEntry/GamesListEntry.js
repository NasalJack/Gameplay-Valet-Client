import React from 'react';
import { Link } from 'react-router-dom';

import './GamesListEntry.css'
import meeple from '../../BlackMeeple.png'


class GamesListEntry extends React.Component {
  
  
  render() {
    const { genres, short_description, rating, title, id, userPage } = this.props
    const genreList = []
    if (genres) {
      const genreArray = genres.split(",");
      genreArray.forEach((genre, i) => genreList.push(<li key={i}>{genre}</li>))
    }
    return (
      <section className='GamesListEntry'>
        <Link to={'/game/'+id}>
          <div className='game-name'>
            <img src={meeple} alt='meeple' height='20px'/>
            <h2>{title}</h2>
          </div>
          <div hidden={userPage} className='rating'>Rating: {rating}</div>
          <ul>{genreList}</ul>
          <div hidden={userPage} className="short_description">{short_description}</div>
        </Link>
      </section>
    )
  }
}

export default GamesListEntry
