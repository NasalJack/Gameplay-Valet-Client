import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Footer.css'

class Footer extends React.Component {
  

  render() {
    const route='/game/'+this.props.match.params.id
    return(
      <footer className='Footer'>
        <Link to={route}>Main</Link>
        <Link to={route+'/rules'}>Rules</Link>
        <Link to={route+'/tips'}>Tips</Link>
        <Link to={route+'/notes/userid'}>Notes</Link>
      </footer>
    )
  }
}

export default withRouter(Footer);
