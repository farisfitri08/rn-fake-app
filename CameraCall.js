import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Button, BackHandler } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Video, AVPlaybackStatus, Audio } from 'expo-av';

function CameraCall({navigation, cameraCallName, permission, pageScreen}) {
    const [type, setType] = useState(CameraType.front);
    const [sound, setSound] = useState(null);
    
    useEffect(() => {
      sound ? () => { sound.unloadAsync(); }  : undefined;

      playSound().then(playRingTone => {
        setSound(playRingTone);
      });
    }, []);

    useEffect(() => {
      const backAction = () => {
        if(sound) {
          sound.stopAsync();
          sound.unloadAsync();
          setSound(null);
        }

        (pageScreen == 'About') ? navigation.navigate('About', { pictureName: cameraCallName }) : navigation.navigate('Menu')
        return true;
      };
  
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  
      return () => backHandler.remove();
    }, [sound]);
    
    return (
    <View style={styles.container}>
        {permission ? (
        <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => {
                    if(sound) {
                      sound.stopAsync();
                      sound.unloadAsync();
                      setSound(null);
                    }
                    navigation.goBack()
                  }
                }>
                  <Image
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                      source={require('./picture/reject_button.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity onPress={() => {
                      if(sound) {
                        sound.stopAsync();
                        sound.unloadAsync();
                        setSound(null);
                      }
                      navigation.navigate('VideoCall', { videoCallName: cameraCallName, pageScreen: pageScreen})
                    }
                  }>
                  <Image
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                      source={require('./picture/accept_video_button.png')}
                    />
                </TouchableOpacity>
              </View>
            </View>
            </Camera> ) :  ( <Text>Please Accept Permission to make Video Call</Text> ) }
    </View>
    );
}

async function playSound() {
  const { sound } = await Audio.Sound.createAsync(
    require('./ringtone/ringtone_whatsapp_video_call.mp3')
  );

  await sound.playAsync();
  await sound.setIsLoopingAsync(true)
  return sound;

}

async function removeSoundCall() {
  return sound;
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
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      marginTop: "auto",
      width: "100%",
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
    box: {
      flexGrow: 1, 
      width: "48%", 
      margin: 2,
      height: 100, 
      justifyContent: "center",
      alignItems: "center",
    },
});

export default CameraCall;