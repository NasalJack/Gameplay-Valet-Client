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
      const {game_id, title, genres, rating} = game
      gamesList.push(
          <GamesListEntry userPage={true} key={game_id} id={game_id} title={title} genres={genres} rating={rating} />
      )
    });
    const noGames = 
      <p>You haven't added any games to your personal list yet. Go back to the all games page and
        add a game to have it show up here.
      </p>

    return (
      <div className='MyGamesPage'>
        <header className="banner">
            <h1>My Games</h1>
        </header>
        {!!gamesList.length ? gamesList : noGames}
      </div>
    )
  }
}

export default MyGamesPage;