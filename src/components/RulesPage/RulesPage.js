import React from 'react';
import { withRouter } from 'react-router-dom';

import ValetApiService from '../../services/valet-api-service';

import './RulesPage.css';

class RulesPage extends React.Component {

  state = {
    error: null,
  }

  componentDidMount() {
    if(this.props.id === Number(this.props.match.params.id)) return
    ValetApiService.getGame(this.props.match.params.id)
      .then(game => {
        return this.props.setCurrentGame(game)
      })
      .catch(res => this.setState({ error: res.error }))
  }

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    return (
      <div className='RulesPage'>
        <header className="banner">
          <h1>{this.props.title}</h1>
          <h2>Rules</h2>
          <p>{this.state.error}</p>
        </header>

        <iframe title="Rules PDF" src={this.props.rules} />

        <button className='pdf-link'>
          <a target='_blank' rel='noopener noreferrer' href={this.props.rules}>View PDF in new page</a>
        </button>

        <button className='main-page die' onClick={this.props.history.goBack}>Main Page</button>
      </div>
    )
  }
}

export default withRouter(RulesPage)
