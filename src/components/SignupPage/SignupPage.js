import React from 'react';
import { Link } from 'react-router-dom';

import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

import './SignupPage.css'

class SignupPage extends React.Component {

  state = {
    error: null
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) this.props.history.push('/')
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
        this.props.history.push('/')
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    return (
      <div className='SignupPage'>
        <header className="banner">
          <h1>Signup</h1>
        </header>

        <div className="error">{this.state.error}</div>

        <section>
          <form onSubmit={(event)=>this.handleSubmit(event)}>
            <div className='input-fields-background'>
              <div className='input-fields'>
                  <label>
                    Username:
                    <input name="user_name" required type="text" />
                  </label><br />
                  <label className="password">
                      Password:
                      <input type="password" name="password" required />
                  </label>
              </div>
            </div>
            <div className='button-box'>
              <button type="submit" className="die">Submit</button>
              <Link to='/login'>
                <button type='button' className="alternative die">Login instead</button>
              </Link>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default SignupPage
