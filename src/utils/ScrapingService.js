import { SCRAPING, FETCHING_ERROR } from '../constants/ActionTypes';
import * as ScrapingActions from '../actions/ScrapingActions';
import axios from 'axios';

export default class ScarpingService {
	constructor() {
		
	}

	scrapingIMDBAsync(scrapingParams) {
		// cannot make api call here?
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
}