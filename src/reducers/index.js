import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';
import ArticleReducer from './ArticleReducer';

export default combineReducers({
  feed: FeedReducer,
  article: ArticleReducer
});
