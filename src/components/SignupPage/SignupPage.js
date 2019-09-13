import React from 'react';
import { Link } from 'react-router-dom';

import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

import './SignupPage.css'

class SignupPage extends React.Component {

  state = {
    error: null
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

    const { user_name, password } = event.target
    const newUser = {
      user_name: user_name.value,
      password: password.value
    }

    AuthApiService.postUser(newUser)
      .then(user => {
        TokenService.saveUserId(user.id)
        TokenService.saveAuthToken(user.authToken)
        this.props.history.push('/games/')
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    return (
      <div className='SignupPage'>
        <header className="banner" role="banner">
              <h1>Sign-up</h1>
              <p>{this.state.error}</p>
          </header>

          <section>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                  Username
                  <input name='user_name' required type="text" />
                </label>
                <label className="password">
                    Password
                    <input name='password' required type="text" />
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
}

export default SignupPage
