import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Video, AVPlaybackStatus, Audio } from 'expo-av';

function VideoCall({navigation, name}) {
    const [type, setType] = useState(CameraType.front);
    const [videoSourceClick, setVideoSourceClick] = useState(null);
    const [status, setStatus] = useState({});
    const video = useRef(null);
    let videoReference = {
      ronaldo_1:require('./video/ronaldo_1.mp4'),
      ronaldo_2:require('./video/ronaldo_2.mp4'),
      ronaldo_3:require('./video/ronaldo_3.mp4'),
      ronaldo_4:require('./video/ronaldo_4.mp4')
    }

    useEffect(() => {
      let item_video = "ronaldo_1";

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
      <View style={styles.buttonContainer}>
      <View style={styles.box}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require('./picture/camera_rotate_button.png')}
          />
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => {navigation.navigate('Menu')}}>
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
      <Camera style={styles.selfieCameraOnVideo} type={CameraType.front}></Camera>
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
  }
});

export default VideoCall;