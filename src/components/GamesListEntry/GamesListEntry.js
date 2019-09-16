import React from 'react';
import { Link } from 'react-router-dom';

import './GamesListEntry.css'
import meeple from '../../BlackMeeple.png'


class GamesListEntry extends React.Component {
  
  
  render() {
    const { genres, short_description, rating, title, id, userPage } = this.props
    const genreArray = genres.split(",")
    const genreList = []
    if (genres) genreArray.forEach((genre, i) => genreList.push(<li key={i}>{genre}</li>))
    return (
      <section className='GamesListEntry'>
        <Link className='game-name' to={'/game/'+id}>
          <img src={meeple} alt='meeple' height='20px'/>
          <h2>{title}</h2>
        </Link>
        <ul>{genreList}</ul>
        <div hidden={userPage} className="short_description">{short_description}</div>
        <div hidden={userPage} className='rating'>Rating: {rating}</div>
      </section>
    )
  }
}

export default GamesListEntry
