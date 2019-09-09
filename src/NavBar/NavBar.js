import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = (props) => {
  return (
    <nav className='NavBar' role="navigation">
      <Link to='/'>Main</Link>
      <Link to='/games'>All Games</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

export default NavBar
