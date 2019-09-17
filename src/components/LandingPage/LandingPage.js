import React from 'react';
import {Link} from 'react-router-dom';

import TokenService from '../../services/token-service';

import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    let bottomButtons
    if(TokenService.hasAuthToken()) {
      bottomButtons = 
        <Link to={'/mygames'}>
          <button>My Games</button>
        </Link>
    } else {
      bottomButtons = 
        <>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        </>
    }
    return (
      <div className='LandingPage' >
        <header className='h1-background'>
          <div className='h1-background'>
            <h1>Gameplay Valet</h1>
          </div>
        </header>

        <section className='description-background'>
          <div className='description'>
            Welcome to Gameplay Valet, your one stop resource for all your board gaming reference needs.
            To get started you can go directly to the Games page where you can get rules and tips for every game, or
            create an account to manage a list of your personal games and write notes for each game.
          </div>
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