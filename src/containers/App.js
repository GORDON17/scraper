import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ScrapingActions from '../actions/ScrapingActions';

import Scraper from '../components/Scraper';

class App extends Component {
  render() {

    const { scrapingState, scrapingActions } = this.props;

    return (
      <div className="container">
        <div id="title">Scraper</div><br/><br/>

        <Scraper scrapingState={scrapingState} scrapingActions={scrapingActions} />
      </div>
    );
  }
}

App.propTypes = {
  scrapingState: PropTypes.object.isRequired,
  scrapingActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    scrapingState: state.scrapingReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    scrapingActions: bindActionCreators(ScrapingActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
