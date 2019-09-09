import React from 'react'

class GamesListEntry extends React.Component {
  
  
  render() {
    return (
      <section className='GamesListEntry'>
        <h2>{this.props.title}</h2>
        <div className="description">{this.props.description}</div>
        <div className='rating'>Rating: {this.props.rating}</div>
      </section>
    )
  }
}

export default GamesListEntry
