import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Homepage.js';
import SecondPage from './SecondPage.js';
import AboutPage from './AboutPage.js';

function HomeScreen({ navigation }) {
  return (
    <HomePage navigation={navigation}/>
  );
}

function MenuScreen() {
  return (
    <SecondPage />
  );
}

function AboutScreen({route, navigation}) {
  return (
    <AboutPage pictureName={route.params.pictureName} navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
