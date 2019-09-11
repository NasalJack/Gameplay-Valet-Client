import React from 'react';
import { withRouter } from 'react-router-dom';

import ValetApiService from '../../services/valet-api-service';

import './RulesPage.css';

class RulesPage extends React.Component {

  componentDidMount() {
    if(this.props.id === Number(this.props.match.params.id)) return
    ValetApiService.getGame(this.props.match.params.id)
      .then(game => {
        return this.props.setCurrentGame(game)
      })
  }

  render() {
    return (
      <div className='RulesPage'>
        <header className="banner" role="banner">
              <h1>Rules</h1>
          </header>

          <section>
              {this.props.rules}
          </section>
      </div>
    )
  }
}

export default withRouter(RulesPage)
