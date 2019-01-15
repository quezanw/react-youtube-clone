
export default (videos = [], action) => {
  switch(action.type) {
    case 'FETCH_VIDEOS':
      return action.payload;
    default:
      return videos;
  }
}