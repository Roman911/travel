const initialState = {
  items: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER:STATE":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state
  }
}