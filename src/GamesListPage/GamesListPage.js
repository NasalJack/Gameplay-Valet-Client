import React from 'react';

import GamesListEntry from '../GamesListEntry/GamesListEntry'

import './GamesListPage.css';
class GamesListPage extends React.Component {

  gamesList = []

  renderGamesList = () => {
    this.props.list.forEach(game => {
      this.gamesList.push(
          <GamesListEntry key={game.id} title={game.title} description={game.description} rating={game.rating} />
      )
    });
  }

  render() {
    this.gamesList.length = 0;
    this.renderGamesList();
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
        {this.gamesList}
      </div>
    )
  }
}

export default GamesListPage;