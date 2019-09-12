import React from 'react'
import { Link } from 'react-router-dom';

import TokenService from '../../services/token-service';

import './NavBar.css'

const NavBar = (props) => {
  
  let loginout
  if (props.loggedIn) {
    loginout = <button onClick={() => props.logout()}>Logout</button>
  }
  if (!props.loggedIn) {
    loginout = <Link to='/login'>Login</Link>
  }
  return (
    <nav className='NavBar' role="navigation">
      <Link to='/'>Main{props.loggedIn}</Link>
      <Link to='/games'>All Games</Link>
      <Link hidden={props.loggedIn ? false : true}to={'/games/'+TokenService.getUserToken}>My Games</Link>
      {loginout}
    </nav>
  )
}

export default NavBar
