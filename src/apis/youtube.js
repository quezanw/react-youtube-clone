import axios from 'axios';

const KEY = 'AIzaSyCgVu7Qk42A433f62pRxaJPSbshWi7-8Ts';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});