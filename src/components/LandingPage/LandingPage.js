import React from 'react';
import {Link} from 'react-router-dom';

import TokenService from '../../services/token-service';

import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    let bottomButtons
    if(this.props.loggedIn) {
      bottomButtons = 
        <Link to={'/games/'+TokenService.getUserToken()}>
          <button>My Games</button>
        </Link>
    } else {
      bottomButtons = 
        <div className='button-box'>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        </div>
    }
    return (
      <div className='LandingPage' >
        <header role="banner">
          <h1>Gameplay Valet</h1>
        </header>

        <section>
          Brief summary about the app
        </section>

        <section className='landing-buttons'>
          <Link to='/games'>
            <button>All Games</button>
          </Link>

          {bottomButtons}

        </section>
      </div>
    )
  }
}

export default LandingPage