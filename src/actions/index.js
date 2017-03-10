import axios from 'axios';

export const loadComplete = (response) => {
  return {
    type: 'load_feed',
    itemIds: response
  };
};

export const loadFeed = () => {
  return function(dispatch) {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => {
        dispatch(loadComplete(response.data));
      });
  }
};

export const receiveArticleDetails = (item) => {
  const { by, url, title, score, time } = item.data;
  return {
    type: 'receive_details',
    payload: { by, url, title, score, time }
  };
};

export const fetchArticleDetails = (id) => {
  return function (dispatch) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(response => dispatch(receiveArticleDetails(response)));
  };
};
