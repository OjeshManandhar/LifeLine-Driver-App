/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';

// packages
import SplashScreen from 'react-native-splash-screen';

// components
import Test from 'components/Test';

function App() {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <>
      <StatusBar backgroundColor='#000000' barStyle='light-content' />
      <View>
        <Text>Hello World</Text>
        <Test />
      </View>
    </>
  );
}

export default App;
