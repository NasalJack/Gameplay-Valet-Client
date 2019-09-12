import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import TokenService from '../../services/token-service';

import './Footer.css'

class Footer extends React.Component {
  

  render() {
    const route='/game/'+this.props.match.params.id
    return(
      <footer className='Footer'>
        <Link to={route}>Main</Link>
        <Link to={route+'/rules'}>Rules</Link>
        <Link to={route+'/tips'}>Tips</Link>
        <Link hidden={TokenService.hasAuthToken() ? false : true}to={route+'/notes/'+TokenService.getUserToken()}>Notes</Link>
      </footer>
    )
  }
}

export default withRouter(Footer);
