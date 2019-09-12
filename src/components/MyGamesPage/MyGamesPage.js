import React from 'react';

import GamesListEntry from '../GamesListEntry/GamesListEntry'

import './MyGamesPage.css';
class MyGamesPage extends React.Component {

  componentDidMount() {
    if(!this.props.list.length) this.props.setMyGames();
  }

  render() {
    const gamesList = [];
    this.props.list.forEach(game => {
      const {game_id, title, short_description, rating} = game
      gamesList.push(
          <GamesListEntry userPage={true} key={game_id} id={game_id} title={title} short_description={short_description} rating={rating} />
      )
    });

    return (
      <div className='MyGamesPage'>
        <header className="banner" role="banner">
            <h1>My Games</h1>
        </header>
        {gamesList}
      </div>
    )
  }
}

export default MyGamesPage;