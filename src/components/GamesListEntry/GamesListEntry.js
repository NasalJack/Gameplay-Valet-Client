import React from 'react';
import { Link } from 'react-router-dom';

class GamesListEntry extends React.Component {
  
  
  render() {
    return (
      <section className='GamesListEntry'>
        <Link to={'/game/'+this.props.id}>
          <h2>{this.props.title}</h2>
        </Link>
        <div hidden={this.props.userPage} className="short_description">{this.props.short_description}</div>
        <div hidden={this.props.userPage} className='rating'>Rating: {this.props.rating}</div>
      </section>
    )
  }
}

export default GamesListEntry
