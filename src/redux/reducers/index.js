import {combineReducers} from 'redux';
import OpenMenuReducers from './openMenuReducers';

const allReducers = combineReducers({
  OpenMenuReducers: OpenMenuReducers,
});

export default allReducers