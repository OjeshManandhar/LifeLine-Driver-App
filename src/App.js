import 'react-native-gesture-handler';
// Note: If you skip this step, your app may crash in production even if it works fine in development.

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

// packages
import MapboxGL from '@react-native-mapbox-gl/maps';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// navigator
import Navigator from 'navigator';

// api
import tokenCheck from 'api/tokenCheck';

// utils
import UserInfo from 'utils/userInfo';

// global
import Fonts from 'global/fonts';
import Colors from 'global/colors';

// env
import { MAPBOX_API_KEY } from '@env';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: { fontFamily: Fonts.regular }
  }
};

MapboxGL.setAccessToken(MAPBOX_API_KEY);

function App() {
  const [isReady, setIsReady] = useState(false);

  // Check UserInfo
  useEffect(() => {
    (async function () {
      await UserInfo.init();

      const userToken = UserInfo.getToken();

      try {
        if (userToken) {
          tokenCheck(userToken)
            .then(async response => {
              console.log('Token check response:', response);

              const newToken = response.data['new_token'];

              await UserInfo.setNewToken(newToken);

              setIsReady(true);
            })
            .catch(async err => {
              console.log('Token check req error:', err);

              await UserInfo.delete();

              setIsReady(true);
            });
        } else {
          setIsReady(true);
        }
      } catch (err) {
        console.log('Token check catch:', err);

        await UserInfo.delete();

        setIsReady(true);
      }
    })();
  }, [setIsReady]);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor='#000000' barStyle='light-content' />

      {isReady && <Navigator />}
    </PaperProvider>
  );
}

export default App;
