import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomePage({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

export default HomePage;