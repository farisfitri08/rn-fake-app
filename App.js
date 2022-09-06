import { useState, useEffect, useRef } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage.js';
import SecondPage from './SecondPage.js';
import AboutPage from './AboutPage.js';
import Chat from './Chat.js';

import CameraCall from './CameraCall.js';
import VideoCall from './VideoCall.js';
import { Camera, CameraType } from 'expo-camera';
import { HeaderBackButton } from '@react-navigation/elements';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

function HomeScreen({ navigation }) {
  return (
    <HomePage navigation={navigation}/>
  );
}

function MenuScreen({ navigation, test }) {
  Alert.alert("menu");
  return (
    <SecondPage navigation={navigation}/>
  );
}

function AboutScreen({route, navigation}) {
  return (
    <AboutPage pictureName={route.params.pictureName} navigation={navigation}/>
  );
}

function ChatScreen({route, navigation }) {
  return (
    <Chat navigation={navigation} name={route.params.chatName}/>
  );
}

function CameraCallScreen({route, navigation, permission }) {  
  return (
    <CameraCall navigation={navigation} cameraCallName={route.params.cameraCallName} permission={permission}/>
  );
}

function VideoCallScreen({route, navigation}) {
  return (
    <VideoCall navigation={navigation} name={route.params.videoCallName}/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const MyTheme = {
    colors: {
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(0,0,0)'
    },
  };

  useEffect(()=>{requestPermission()},[]);
  
  return (
    <Provider store={Store}>
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: {backgroundColor: '#FFFFFF'}}}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{headerStyle: {backgroundColor: '#FFFFFF'}}}/>
        <Stack.Screen name="About" component={AboutScreen} options={{headerStyle: {backgroundColor: '#FFFFFF'}}}/>
        <Stack.Screen name="Chat" component={ChatScreen} options={({ navigation, route }) => ({headerStyle: {backgroundColor: '#FFFFFF'}, headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('Menu')}
            />
          ),})} />
        <Stack.Screen name='CameraCall' options={{headerShown: false}}>
          {(props) => <CameraCallScreen {...props} permission={permission} />}
        </Stack.Screen>
        <Stack.Screen name="VideoCall" options={{headerShown: false}} component={VideoCallScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
