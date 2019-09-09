import React from 'react';
import { Link } from 'react-router-dom';

import './SignupPage.css'

const SignupPage = () => {
  return (
    <div className='SignupPage'>
      <header className="banner" role="banner">
            <h1>Sign-up</h1>
        </header>

        <section>
          <form>
              <label>
                Username
                <input required type="text" />
              </label>
              <label className="password">
                  Password
                  <input required type="text" />
              </label>
              <br />
              <button type="submit">Submit</button>
          </form>
          <Link to='/login'>
            <button className="alternative">Login instead</button>
          </Link>
        </section>
    </div>
  )
}

export default SignupPage
