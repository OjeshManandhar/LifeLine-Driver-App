import 'react-native-gesture-handler';
// Note: If you skip this step, your app may crash in production even if it works fine in development.

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

// packages
import SplashScreen from 'react-native-splash-screen';

// navigator
import Navigator from 'navigator';

function App() {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <>
      <StatusBar backgroundColor='#000000' barStyle='light-content' />
      <Navigator />
    </>
  );
}

export default App;
