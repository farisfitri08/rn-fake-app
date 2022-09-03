import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function VideoCall({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Testing Video Call</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      flex: 1,
    }
  });

export default VideoCall;