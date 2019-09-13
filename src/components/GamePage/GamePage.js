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

    const removeGameButton = <button onClick={this.handleDeleteClicked}>Remove from my games</button>
    const addGameButton = <button onClick={this.handleAddClicked}>Add to my games</button>
    const loggedInOptions = 
      <div className='button-box'>
      <Link to={route+'/notes'}>
        <button>Notes</button>
      </Link>
      {this.state.onUserList ? removeGameButton : addGameButton}
    </div>

    return (
      <div className='GamePage'>
        <header className="banner" role="banner">
          <h1>{this.state.error ? 'Game note found' : (!title ? 'loading...' : title)}</h1>
          <p>{this.state.error}</p>
          <div>rating: {rating}</div>
          <ul>{genres}</ul>
        </header>

        <section>{long_description}</section>

        <section>
            {/* <button>Quick Rules</button> */}
            <div className='button-box'>
              <Link to={route+'/rules'}>
                <button>Rules</button>
              </Link>
              <Link to={route+'/tips'}>
                <button>Tips</button>
              </Link>
            </div>
            {TokenService.hasAuthToken() ? loggedInOptions : ''}
        </section>
      </div>
    )
  }
}

export default withRouter(GamePage)
