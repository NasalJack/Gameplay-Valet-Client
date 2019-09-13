import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

import './LoginPage.css'

class LoginPage extends React.Component {

  state = {
    error: null
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) this.props.history.push('/')
  }

  handleSubmitAuth = event => {
    event.preventDefault();
    this.setState({ error: null })
    const { user_name, password } = event.target
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then( res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.id)
        this.props.onLoginSuccess()
        this.props.history.push('/')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <div className='LoginPage'>
        <header className="banner" role="banner">
          <h1>Login</h1>
        </header>

        <div className="error">{this.state.error}</div>

        <section>
          <form onSubmit={(event) =>this.handleSubmitAuth(event)}>
              <label>
                Username
                <input name="user_name" required type="text" />
              </label>
              <label className="password">
                  Password
                  <input name="password" required type="text" />
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
}

export default withRouter(LoginPage)
