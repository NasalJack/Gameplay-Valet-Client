import React from 'react';
import { Link } from 'react-router-dom';

class GamesListEntry extends React.Component {
  
  
  render() {
    const { genres, short_description, rating, title, id, userPage } = this.props
    const genreArray = genres.split(",")
    const genreList = []
    if (genres) genreArray.forEach((genre, i) => genreList.push(<li key={i}>{genre}</li>))
    return (
      <section className='GamesListEntry'>
        <Link to={'/game/'+id}>
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
