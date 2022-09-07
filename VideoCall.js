import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Video, AVPlaybackStatus, Audio } from 'expo-av';

function VideoCall({navigation, name, pageScreen}) {
    const [type, setType] = useState(CameraType.front);
    const [videoSourceClick, setVideoSourceClick] = useState(null);
    const [status, setStatus] = useState({});
    const video = useRef(null);
    let videoReference = {
      cr_1:require('./video/cr_1.mp4'),
      cr_2:require('./video/cr_2.mp4'),
      cr_3:require('./video/cr_3.mp4'),
      cr_4:require('./video/cr_4.mp4')
    }

    useEffect(() => {
      let item_video = name;

      let videoRef = videoReference[item_video];

      setVideoSourceClick(videoRef);
    }, []);

    return (
      <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videoSourceClick}
        fullscreen={true}
        resizeMode="cover"
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{display: "flex", flexWrap: "wrap", flexDirection: "row", height: "100%", width: "100%"}}>
        <View style={styles.box_beside_camera}></View>
        <Camera style={styles.box_camera} type={CameraType.front}></Camera>
        </View>
      <View style={styles.buttonContainer}>
      <View style={styles.box}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require('./picture/camera_rotate_button.png')}
          />
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => { 
          (pageScreen == 'About') ? navigation.navigate('About', { pictureName: name }) : navigation.navigate('Menu')
        }}>
        <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={require('./picture/reject_button.png')}
            />
      </TouchableOpacity>
      </View>
      <View style={styles.box}>
      <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require('./picture/mute_button.png')}
          />
      </View>
      </View>
      
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
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "auto",
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
  },
  box: {
    flexGrow: 1, 
    width: "32%", 
    margin: 2,
    height: 100, 
    justifyContent: "center",
    alignItems: "center",
  },
  box_beside_camera: {
    flexGrow: 1, 
    width: "75%", 
    height: "20%", 
    justifyContent: "center",
    alignItems: "center",
  },
  box_camera: {
    flexGrow: 1, 
    width: "21%", 
    margin: 4,
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default VideoCall;