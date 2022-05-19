import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default App;
