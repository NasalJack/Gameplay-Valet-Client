import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ValetApiService from '../../services/valet-api-service';

import './GamePage.css'

class GamePage extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    if(this.props.id === Number(this.props.match.params.id)) {
      return this.setState({loading: false})
    }
    ValetApiService.getGame(this.props.match.params.id)
      .then(game => {
        return this.props.setCurrentGame(game)
      })
      .then((res) => this.setState({loading: false}))
      
  }

  render() {
    const route = this.props.match.params.id;
    const { rating, genres, long_description, title } = this.props

    return (
      <div className='GamePage'>
        <header className="banner" role="banner">
          <h1>{this.state.loading ? 'loading...' : title}</h1>
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
            <div className='button-box'>
              <Link to={route+'/notes'}>
                <button>Notes</button>
              </Link>
              <button>Add/remove</button>
            </div>
        </section>
      </div>
    )
  }
}

export default withRouter(GamePage)
