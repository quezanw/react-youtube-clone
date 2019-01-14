import { combineReducers } from 'redux';

import termReducer from './termReducer';
import videosReducer from './videosReducer';
import selectedVideoReducer from './selectVideoReducer';


export default combineReducers({
  term: termReducer,
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});