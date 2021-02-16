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

function App() {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
      <View>
        <Text>Hello World</Text>
      </View>
    </>
  );
}

export default App;
