import { combineReducers } from 'redux';

import scrapingReducer from './scrapingReducer';

const rootReducer = combineReducers({
  scrapingReducer: scrapingReducer,
});

export default rootReducer;