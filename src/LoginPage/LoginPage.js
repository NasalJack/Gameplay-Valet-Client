import React from 'react'

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
                <input type="text" />
              </label>
              <label className="password">
                  Password
                  <input type="text" />
              </label>
              <br />
              <button type="submit">Submit</button>
          </form>
          <button className="alternative">Signup instead</button>
        </section>
    </div>
  )
}

export default LoginPage
