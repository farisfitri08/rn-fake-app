import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

function CameraCall({navigation, cameraCallName, permission}) {
    const [type, setType] = useState(CameraType.front);
    Alert.alert("masuk camera");
    return (
    <View style={styles.container}>
        {permission ? (
        <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <View style={{display: "flex", flexDirection: 'row', flexGrow: 1, width: "50%"}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                  <Image
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                      source={require('./picture/reject_button.png')}
                    />
                </TouchableOpacity>
              </View>
              <View style={{display: "flex", flexDirection: 'row', flexGrow: 1, width: "50%"}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
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

function toggleCameraType() {
    Alert.alert("toggleCamera");
}

function AboutPageTitle({pictureName, navigation}) {

  return (
      <View style={{display: 'flex', flexDirection: "row"}}>
          <TouchableOpacity>
          <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_"+noPicture })}>
          <View style={{alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: 20, paddingTop: 6}}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </View>
          </TouchableOpacity>
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
    }
});

export default CameraCall;