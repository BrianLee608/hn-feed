import React from 'react';
import { Text, View } from 'react-native';

const ArticleContainer = (props) => {
  return (
    <View>
      <Text>
        {props.id}
      </Text>
    </View>
  );
};

export default ArticleContainer;
