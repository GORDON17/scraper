import React, { Component, PropTypes } from 'react';

import ScarpingService from '../utils/ScrapingService';

export default class Scraper extends Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {

  }

  handleScraping() {
    const scrapingParams = {
      start: true,
      query: ''
    }

    // let scarpingService = new ScarpingService();
    // scarpingService.scrapingIMDBAsync(scrapingParams);
    this.props.scrapingActions.scrapingIMDBAsync(scrapingParams);
  }

  render() {
    const { scrapingState } = this.props;

    return (
      <div className="row">
        <div className="container">
          <button className="btn btn-primary" onClick={() => {this.handleScraping();}}>Scrape</button>
          <div className="container"><span id="result">{JSON.stringify(scrapingState.scrapingResults)}</span></div>
        </div>
      </div>
    );
  }
}

Scraper.propTypes = {
  scrapingState: PropTypes.object.isRequired,
  scrapingActions: PropTypes.object.isRequired
};
