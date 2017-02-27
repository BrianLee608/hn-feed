const INITIAL_STATE = {
  itemIds: [],
  feedType: 'newstories',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'front_page_loaded':
      return { ...state, itemIds: action.payload };
    default:
      return state;
  }
};
