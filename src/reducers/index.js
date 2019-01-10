import { combineReducers } from 'redux';


const termReducer = () => {
  return { term: '' };
}

const videosReducer = () => {
  return [];
}

const selectedVideoReducer = (selectedVideo=null, action) => {
  if(action.type === 'VIDEO_SELECTED') {
    return action.payload;
  }
  return selectedVideo;
}

export default combineReducers({
  term: termReducer,
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});