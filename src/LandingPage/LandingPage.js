import React from 'react';

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
            <button>View Games</button>
            <div className='button-box'>
              <button>Login</button>
              <button>Signup</button>
            </div>
        </section>
      </div>
    )
  }
}

export default LandingPage