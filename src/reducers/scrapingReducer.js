import { SCRAPING, FETCHING_ERROR } from '../constants/ActionTypes';

const initialState = {
	scrapingResults: [],
  error: null
}

export default function scrapingReducer(state = initialState, action) {
  switch (action.type) {
  case SCRAPING:
    return Object.assign({}, state, {
        scrapingResults: action.scrapingResults
      });
    break;
  case FETCHING_ERROR:
    state = {
      ...state,
      error: action.payload
    };
    break;
  default:
    return state;
  }
}
