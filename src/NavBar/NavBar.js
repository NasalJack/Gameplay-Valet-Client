import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = (props) => {
  return (
    <nav className='NavBar' role="navigation">
      <div>Main</div>
      <div>All Games</div>
      <div>Login</div>
    </nav>
  )
}

export default NavBar
