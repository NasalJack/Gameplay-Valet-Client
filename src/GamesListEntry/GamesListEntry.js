import React from 'react';
import { Link } from 'react-router-dom';

class GamesListEntry extends React.Component {
  
  
  render() {
    return (
      <section className='GamesListEntry'>
        <Link to={'/game/'+this.props.id}>
          <h2>{this.props.title}</h2>
        </Link>
        <div className="description">{this.props.description}</div>
        <div className='rating'>Rating: {this.props.rating}</div>
      </section>
    )
  }
}

export default GamesListEntry
