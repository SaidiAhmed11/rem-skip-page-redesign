import { combineReducers } from 'redux';
import skips from './slices/SkipSlice';

const reducers = combineReducers({
  skips,
});

export default reducers;
