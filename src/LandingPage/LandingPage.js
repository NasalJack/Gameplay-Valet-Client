import React from 'react';

import {Link} from 'react-router-dom';

import './LandingPage.css'

class LandingPage extends React.Component {

  render() {
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
              <button>View Games</button>
            </Link>
            <div className='button-box'>
              <Link to='/login'>
                <button>Login</button>
              </Link>
              <Link to='/signup'>
                <button>Signup</button>
              </Link>
            </div>
        </section>
      </div>
    )
  }
}

export default LandingPage