import { combineReducers } from 'redux';

import details from './details';
import donations from './donations';

export default combineReducers({
  details,
  donations,
});
