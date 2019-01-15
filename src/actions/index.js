import youtube from '../apis/youtube';
// import _ from 'lodash';

export const getTerm = term => {
  return {
    type: 'GET_TERM',
    payload: term
  }
}

export const selectVideo = video => {
  return {
    type: 'SELECT_VIDEO',
    payload: video
  }
}

export const fetchVideos = term => async dispatch => {
  const response = await youtube.get(`/search`, { params: { q: term} });
  // console.log(response);
  dispatch({ type: 'FETCH_VIDEOS', payload: response.data.items });
  dispatch(selectVideo(response.data.items[0]));
}