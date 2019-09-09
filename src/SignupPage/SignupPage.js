import React from 'react'

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
                <input type="text" />
              </label>
              <label className="password">
                  Password
                  <input type="text" />
              </label>
              <br />
              <button type="submit">Submit</button>
          </form>
          <button className="alternative">Login instead</button>
        </section>
    </div>
  )
}

export default SignupPage
