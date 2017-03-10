import axios from 'axios';
import React, {Component} from 'react';
import { View , Text} from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    console.log(this.props.id);
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`)
      .then(response => {
        console.log(response);
        this.setState({data: response.data});
      });
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>{this.state.data ? this.state.data.title : null}</Text>
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export default Card;
