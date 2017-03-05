const INITIAL_STATE = {
  by: '',
  url: '',
  title: '',
  score: '',
  time: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'receive_details':
      return action.payload;
    default:
      return state;
  }
};
