import React from 'react';

import GamesListEntry from '../GamesListEntry/GamesListEntry'

import './MyGamesPage.css';
class MyGamesPage extends React.Component {

  render() {
    const gamesList = [];
    this.props.list.forEach(game => {
      const {id, title, description, rating} = game
      gamesList.push(
          <GamesListEntry userPage={true} key={id} id={id} title={title} description={description} rating={rating} />
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