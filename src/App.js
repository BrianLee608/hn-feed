import axios from 'axios';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => console.log(response));
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
      <View>
        <Text>Hello</Text>
      </View>
      </Provider>
    );
  }
}

export default App;
