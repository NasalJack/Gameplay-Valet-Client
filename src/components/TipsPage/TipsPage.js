import React from 'react';
import { withRouter } from 'react-router-dom';

import ValetApiService from '../../services/valet-api-service';

import './TipsPage.css';

class TipsPage extends React.Component {

  componentDidMount() {
    if(this.props.id === Number(this.props.match.params.id)) return
    ValetApiService.getGame(this.props.match.params.id)
      .then(game => {
        return this.props.setCurrentGame(game)
      })
  }

  render() {
  return (
      <div className='TipsPage'>
        <header className="banner" role="banner">
          <h1>{this.props.title}</h1>
          <h2>Tips</h2>
        </header>

        <section>
          {this.props.tips}
        </section>
      </div>
    )
  }
}

export default withRouter(TipsPage)
