import React from 'react';

import GamesListEntry from '../GamesListEntry/GamesListEntry'

import './GamesListPage.css';
class GamesListPage extends React.Component {

  render() {
    const gamesList = [];
    this.props.list.forEach(game => {
      const {id, title, short_description, rating} = game
      gamesList.push(
          <GamesListEntry key={id} id={id} title={title} short_description={short_description} rating={rating} />
      )
    });

    return (
      <div className='GamesListPage'>
        <header className="banner" role="banner">
            <h1>All Games</h1>
        </header>
        <section>
          <label>
            Search
            <input type="text" />
          </label>
          <br />
          <label>
            Sort
            <select>
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
              </select>
          </label>
        </section>
        {gamesList}
      </div>
    )
  }
}

export default GamesListPage;