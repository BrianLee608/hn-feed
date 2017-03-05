import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchArticleDetails } from '../actions';
import Card from './Card';
import CardSection from './CardSection';

class ArticleContainer extends Component {
  componentDidMount() {
    this.props.fetchArticleDetails(this.props.id);
  }

  render() {
    console.log(this.props.by);
    const {
            titleSectionStyle
          } = styles;

    return (
      <View>
        <Card>
          <CardSection>
            <View>
              <Text>{this.props.title}</Text>
            </View>
          </CardSection>
        </Card>
      </View>
    );
  }

}

const styles = {
  titleSectionStyle: {
    fontSize: 10
  }
};

const mapStateToProps = ({ article }) => {
  const { by, url, title, score, time } = article;

  return { by, url, title, score, time };
};

export default connect(mapStateToProps, { fetchArticleDetails })(ArticleContainer);
