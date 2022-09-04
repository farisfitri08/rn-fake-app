import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Button, BackHandler } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Video, AVPlaybackStatus, Audio } from 'expo-av';

function CameraCall({navigation, cameraCallName, permission}) {
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
        }
        navigation.navigate('Menu')
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
              <View style={{display: "flex", flexDirection: 'row', flexGrow: 1, width: "50%"}}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    if(sound) {
                      sound.stopAsync();
                      sound.unloadAsync();
                    }
                    navigation.navigate('Menu')
                  }
                }>
                  <Image
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                      source={require('./picture/reject_button.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={{display: "flex", flexDirection: 'row', flexGrow: 1, width: "50%"}}>
                <TouchableOpacity style={styles.button} onPress={() => {
                      if(sound) {
                        sound.stopAsync();
                        sound.unloadAsync();
                      }
                      navigation.navigate('VideoCall', { videoCallName: cameraCallName })
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
    }
});

export default CameraCall;