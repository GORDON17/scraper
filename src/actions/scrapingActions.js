import { SCRAPING, FETCHING_ERROR } from '../constants/ActionTypes';
import axios from 'axios';

export function scraping(scrapingResults) {
  return {
    type: SCRAPING,
    scrapingResults
  };
}

export function scrapingIMDBAsync(scrapingParams) {
  return dispatch => {
    setTimeout(() => {

      axios.get('/scraping-imdb')
       .then(response => {
          dispatch(scraping(response.data.items));
       })
       .catch( (err) => {
          dispatch({
            type: FETCHING_ERROR,
            payload: err
          })
      });
    }, 1000);
  };
}



