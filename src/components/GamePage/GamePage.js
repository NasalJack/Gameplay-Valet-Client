import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ValetApiService from '../../services/valet-api-service';
import TokenService from '../../services/token-service';

import './GamePage.css'

class GamePage extends React.Component {

  state = {
    error: null,
    onUserList: false
  }

  componentDidMount() {
    ValetApiService.checkGameListStatus(this.props.match.params.id)
      .then(status => {
        return this.setState({onUserList: status.onList})
      })
      .catch(res => this.setState({ error: res.error}))
    if(this.props.id === Number(this.props.match.params.id)) return
    ValetApiService.getGame(this.props.match.params.id)
      .then(game => {
        return this.props.setCurrentGame(game)
      })
      .catch(res => this.setState({ error: res.error }))
  }

  handleAddClicked = () => {
    ValetApiService.addGameToList(this.props.match.params.id)
      .then(() => {
        this.setState({onUserList: true})
        this.props.setMyGames()
      })
      .catch(res => this.setState({ error: res.error }))
  }

  handleDeleteClicked = () => {
    ValetApiService.removeGameFromList(this.props.match.params.id)
      .then(() => {
        this.setState({onUserList: false})
        this.props.setMyGames()
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const route = this.props.match.params.id;
    const { rating, genres, long_description, title } = this.props

    const removeGameButton = <button className='add-remove-button' onClick={this.handleDeleteClicked}>Remove from my games</button>
    const addGameButton = <button className='add-remove-button' onClick={this.handleAddClicked}>Add to my games</button>

    const genreList = []
    if (genres) {
      const genreArray = genres.split(",");
      genreArray.forEach((genre, i) => genreList.push(<li key={i}>{genre}</li>))
    }

    return (
      <div className='GamePage'>
        <header className="banner">
          <h1>{this.state.error ? 'Game note found' : (!title ? 'loading...' : title)}</h1>
        </header>

        <p className='error'>{this.state.error}</p>

        <section className='rating-genres-background'>
          <div className='rating-genres'>
            <div>rating: {rating}</div>
            <ul>{genreList}</ul>
          </div>
        </section>

        <section className='description-background'>
          <div className='description'>
            {long_description}
          </div>
        </section>

        <section className='buttons'>
            <div className='button-box'>
              <Link to={route+'/rules'}>
                <button className='die'>Rules</button>
              </Link>
              <Link to={route+'/tips'}>
                <button className='die'>Tips</button>
              </Link>
              <Link hidden={TokenService.hasAuthToken() ? false : true}to={route+'/notes'}>
                <button className='die'>Notes</button>
              </Link>
            </div>
            <div hidden={TokenService.hasAuthToken() ? false : true}>
              {this.state.onUserList ? removeGameButton : addGameButton}
            </div>
        </section>
      </div>
    )
  }
}

export default withRouter(GamePage)
