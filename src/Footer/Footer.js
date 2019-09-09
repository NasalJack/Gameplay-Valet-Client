import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

class Footer extends React.Component {
  

  render() {
    return(
      <footer className='Footer'>
        <div>Main</div>
        <div>Rules</div>
        <div>Tips</div>
        <div>Notes</div>
      </footer>
    )
  }
}

export default Footer;
