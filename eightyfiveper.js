import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Homepage.js';
import SecondPage from './SecondPage.js';
import AboutPage from './AboutPage.js';
import Chat from './Chat.js';
// import CameraCall from './CameraCall.js';
// import { Camera, CameraType } from 'expo-camera';

// const [permission, requestPermission] = Camera.useCameraPermissions();

// useEffect(()=>{requestPermission()},[]);

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

function ChatScreen({route, navigation }) {
  return (
    <Chat navigation={navigation} name={route.params.chatName}/>
  );
}

// function CameraCallScreen({route, navigation }) {
//   return (
//     <CameraCall navigation={navigation} cameraCallName={route.params.cameraCallName} permission={permission}/>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        {/* <Stack.Screen name="CameraCall" component={CameraCallScreen} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;