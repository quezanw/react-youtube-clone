
export default (term = '', action) => {
  switch(action.type) {
    case 'GET_TERM':
      return action.payload;
    default:
      return term;
  }
}