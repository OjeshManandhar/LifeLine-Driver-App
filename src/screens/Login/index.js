import React from 'react';
import { Text, View, Button } from 'react-native';

function Login(props) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => props.navigation.navigate('MapScreen')}
        title='To MapScreen'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
    </View>
  );
}

export default Login;
