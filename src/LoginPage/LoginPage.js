import React from 'react'
import { Link } from 'react-router-dom';

import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <header className="banner" role="banner">
            <h1>Login</h1>
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
          <Link to='/signup'>
            <button className="alternative">Signup instead</button>
          </Link>
        </section>
    </div>
  )
}

export default LoginPage
