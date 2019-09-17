import React from 'react';

import GamesListEntry from '../GamesListEntry/GamesListEntry'

import './GamesListPage.css';
class GamesListPage extends React.Component {
  render() {
    const { list, filterFor } = this.props;
    const filteredGames = list.filter(game => 
      (game.title.includes(filterFor) || game.genres.includes(filterFor))
    )
    const gamesList = [];
    filteredGames.forEach(game => {
      const {id, title, short_description, rating, genres} = game
      gamesList.push(
          <GamesListEntry key={id} id={id} title={title} short_description={short_description} rating={rating} genres={genres}/>
      )
    });

    return (
      <div className='GamesListPage'>
        <header className="banner" role="banner">
            <h1>All Games</h1>
        </header>
        <section className='user-inputs'>
          <label>
            Search: 
            <input name='filter' onChange={(event)=>this.props.filterList(event)}type="text" />
          </label>
          <br />
          <label>
            Sort: 
            <select name='sort' onChange={(event) => this.props.sortList(event)}>
                <option value="id">Unsorted</option>
                <option value="title">Alphabetical</option>
                <option value="rating">Rating</option>
              </select>
          </label>
        </section>
        {gamesList}
      </div>
    )
  }
}

export default GamesListPage;