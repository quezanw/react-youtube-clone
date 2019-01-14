
export default (videos = [], action) => {
  switch(action.type) {
    case 'FETCH_VIDEOS':
      console.log(action.payload);
      return [action.payload];
    default:
      return videos;
  }
}