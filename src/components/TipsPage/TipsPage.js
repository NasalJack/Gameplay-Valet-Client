import React from 'react';
import { withRouter } from 'react-router-dom';

import ValetApiService from '../../services/valet-api-service';

import './TipsPage.css';

class TipsPage extends React.Component {

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
  const { tips, title } = this.props
  const tipsList = []
  if (tips) {
    const tipArray = tips.split(",");
    tipArray.forEach((tip, i) => tipsList.push(<li key={i}>{tip}</li>))
  }
  return (
      <div className='TipsPage'>
        <header className="banner">
          <h1>{title}</h1>
          <h2>Tips</h2>
          <p>{this.state.error}</p>
        </header>

        <section>
          <ul>
            {tipsList}
          </ul>
        </section>
        <button onClick={this.props.history.goBack}>Main Page</button>
      </div>
    )
  }
}

export default withRouter(TipsPage)
