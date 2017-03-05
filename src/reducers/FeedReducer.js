const INITIAL_STATE = {
  itemIds: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'load_feed':
      return { ...state, itemIds: action.payload };
    default:
      return state;
  }
};
