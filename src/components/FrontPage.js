import axios from 'axios';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { loadFeed } from '../actions';
import Card from './Card';


class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  componentDidMount() {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => {
        this.props.loadFeed(response.data);
      });
  }

  render() {
    const rows = this.dataSource.cloneWithRows(this.props.itemIds || []);
    console.log(rows);
    return (
      <View>
        <Text>"It is working!"</Text>
        <Text>{this.props.itemIds.length}</Text>
        <ListView
          dataSource={rows}
          renderRow={(rowData) => <Card id={rowData} />}
          enableEmptySections
        />
      </View>
    );
  }
}

const mapStateToProps = ({ feed }) => {
  const { itemIds, loading } = feed;
  return { itemIds, loading };
};

export default connect(mapStateToProps, { loadFeed })(FrontPage);
