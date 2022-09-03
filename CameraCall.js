import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

function CameraCall({cameraCallName, navigation, permission}) {
    const [type, setType] = useState(CameraType.front);

    return (
    <View style={styles.container}>
        {permission ? (
        <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}>
                <Text style={styles.text}>Connect </Text>
                </TouchableOpacity>
            </View>
            </Camera> ) :  ( <Text>Please Accept Permission to make Video Call</Text> ) }
    </View>
    );
}

function toggleCameraType() {
    Myvideoksk();
}

function Myvideoksk() {
    console.log("video");
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