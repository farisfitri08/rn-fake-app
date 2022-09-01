import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Video, AVPlaybackStatus, Audio } from 'expo-av';

export default function App() {
  const [cameraClick, setCameraClick] = useState(false);
  const [videoClick, setVideoClick] = useState(false);
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const Tab = createMaterialTopTabNavigator();
  const Stack = createStackNavigator();
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const ronaldo_1 =  require('./video/ronaldo_1.mp4');
  const [sound, setSound] = useState(null);

  async function playSound() {

    const { sound } = await Audio.Sound.createAsync(
      require('./ringtone/ringtone_whatsapp_video_call.mp3')
    );

    setSound(sound);

    await sound.playAsync(); 
  }

  useEffect(()=>{requestPermission()},[]);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  
  function sasdfa() {
    if(permission) {
      setCameraClick(true)
    }
  }

  function toggleCameraType() {
    // setType((current) => (
    //   current === CameraType.back ? CameraType.front : CameraType.back
    // ));
    Myvideoksk();
  }

  function HomeScreen({ navigation }) {
    return (
      <Tab.Navigator>
          <Tab.Screen name="ListProfile" component={ListProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  function ListProfileScreen({ navigation }) {
  
    return (
        <View>
        <Button
          title="Go to Camera"
          onPress={CameraScreen} title="grant permission" 
        />
        <Text>{'\n'}</Text>
        <Button
          title="Go to Camera"
          onPress={Myvideoksk} title="go to video" 
        />
        </View>
    );
    
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  function ChatScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat Screen</Text>
      </View>
    );
  }
  
  function CameraScreen() {
    
    if(permission) {
        setCameraClick(true)

        playSound();
      }
  }

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    );
  }

  function Myvideoksk() {
    setCameraClick(false)
    setVideoClick(true)
    
    if(sound) {
      sound.stopAsync();
      sound.unloadAsync();
    }

    Alert.alert("Camera : "+cameraClick+" Video : "+videoClick+" Sound "+sound);
  }

  function CancelVideoCall() {
    setCameraClick(false);
    setVideoClick(false);

    Alert.alert("Camera : "+cameraClick+" Video : "+videoClick);
  }

  return (
    <View style={styles.container}>
    {permission && cameraClick === true ? (
      <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera> ) : (videoClick ? (<View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={ronaldo_1}
        fullscreen={true}
        resizeMode="stretch"
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <TouchableOpacity style={styles.cancelVideoButton}>
        <Button 
          title="Cancel Video"
          onPress={CancelVideoCall} 
        />
      </TouchableOpacity>
      <Camera style={styles.selfieCameraOnVideo} type={CameraType.front}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
    </View>) : (<NavigationContainer><MyStack /></NavigationContainer>)) }
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black"
  },
  selfieCameraOnVideo: {
    position: "absolute",
    top: 50,
    left: 280,
    bottom: 630,
    right: 10,
  },
  cancelVideoButton: {
    position: "absolute",
    top: 750,
    left: 100,
    bottom: 0,
    right: 100,
  }
});
