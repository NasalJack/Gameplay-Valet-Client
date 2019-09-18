import React from 'react';
import { withRouter } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import Catan from './Catan.pdf'

import ValetApiService from '../../services/valet-api-service';

import './RulesPage.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class RulesPage extends React.Component {

  state = {
    error: null,
    numPages: null,
    pageNumber: 1
  }

  componentDidMount() {
    if(this.props.id === Number(this.props.match.params.id)) return
    ValetApiService.getGame(this.props.match.params.id)
      .then(game => {
        return this.props.setCurrentGame(game)
      })
      .catch(res => this.setState({ error: res.error }))
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div className='RulesPage'>
        <header className="banner">
          <h1>{this.props.title}</h1>
          <h2>Rules</h2>
          <p>{this.state.error}</p>
        </header>

        <section>
          {this.props.rules}
          <Document file={Catan} onLoadSuccess={this.onDocumentLoadSuccess} >
            <Page pageNumber={pageNumber} width={document.documentElement.clientWidth}/>
          </Document>
          <button disabled={this.state.pageNumber === 1} onClick={this.goToPrevPage}>{'< Prev'}</button>
          <button disabled={this.state.pageNumber === this.state.numPages} onClick={this.goToNextPage}>{'Next >'}</button>
          <p>Page {pageNumber} of {numPages}</p>
        </section>

        <button className='main-page' onClick={this.props.history.goBack}>Main Page</button>
      </div>
    )
  }
}

export default withRouter(RulesPage)
