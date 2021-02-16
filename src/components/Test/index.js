import React from 'react';
import { View, Text } from 'react-native';

// env
import { API_URL } from '@env';

function Test() {
  return (
    <View>
      <Text>API URL: {API_URL}</Text>
    </View>
  );
}

export default Test;
