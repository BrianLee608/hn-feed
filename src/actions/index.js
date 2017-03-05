import axios from 'axios';

export const loadFeed = (data) => {
  return {
    type: 'load_feed',
    payload: data
  };
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
