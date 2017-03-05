import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { FrontPage } from './components';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">
        <Scene
          key="frontPage"
          component={FrontPage}
          title="Feed"
          initialize
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
