import React from 'react';
import { withRouter } from 'react-router-dom';

import ValetApiService from '../../services/valet-api-service';

import './RulesPage.css';

class RulesPage extends React.Component {

  state = {
    error: null
  }

  componentDidMount() {
    if(this.props.id === Number(this.props.match.params.id)) return
    ValetApiService.getGame(this.props.match.params.id)
      .then(game => {
        return this.props.setCurrentGame(game)
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    return (
      <div className='RulesPage'>
        <header className="banner">
          <h1>{this.props.title}</h1>
          <h2>Rules</h2>
          <p>{this.state.error}</p>
        </header>

        <section>
          {this.props.rules}
        </section>

        <button onClick={this.props.history.goBack}>Main Page</button>
      </div>
    )
  }
}

export default withRouter(RulesPage)
