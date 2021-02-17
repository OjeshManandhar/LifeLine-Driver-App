import React from 'react';
import { Text, View, Button } from 'react-native';

function MapScreen(props) {
  return (
    <View>
      <Text>MapScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('Login')}
        title='To Login'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
    </View>
  );
}

export default MapScreen;
