import React from 'react';
import {Link} from 'react-router-dom';

import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    let bottomButtons
    if(this.props.loggedIn) {
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
        <header role="banner">
          <h1>Gameplay Valet</h1>
        </header>

        <section className='description'>
          <div>
          Welcome to Gameplay Valet, your one stop resource for all your board gaming reference needs.
          To get started you can go directly to the Games page where you can get rules and tips for every game, or
          create an account to manage a list of your personal games and to have the ability to make notes on each game.
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