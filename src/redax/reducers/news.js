const initialState = {
  items: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'NEWS:SET_ITEMS':
      return {
        items: payload
      };
    default:
      return state;
  }
}