import * as React from 'react';
import { Button, View, Text } from 'react-native';

function ProfileTab({navigation}) {
  return (
    <View>
      <Button
        title="Ronaldo 1"
        onPress={() => {CameraScreen(1)} } 
      />
      <Text>{'\n'}</Text>
      <Button
        title="Ronaldo 2"
        onPress={() => {CameraScreen(2)}} 
      />
      <Text>{'\n'}</Text>
      <Button
        title="Ronaldo 3"
        onPress={() => {CameraScreen(3)}} 
      />
      <Text>{'\n'}</Text>
      <Button
        title="Ronaldo 4"
        onPress={() => {CameraScreen(4)}} 
      />
      </View>
  );
}

export default ProfileTab;