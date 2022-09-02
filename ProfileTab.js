import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function ProfileTab({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.column}>
          <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://crop-circle.imageonline.co/image.png',
                }}
              />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>C.Ronaldo 1</Text>
          <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.column}>
          <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://crop-circle.imageonline.co/image.png',
                }}
              />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>C.Ronaldo 2</Text>
          <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.column}>
          <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://crop-circle.imageonline.co/image.png',
                }}
              />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>C.Ronaldo 3</Text>
          <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.column}>
          <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://crop-circle.imageonline.co/image.png',
                }}
              />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>C.Ronaldo 4</Text>
          <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
        </View>
      </View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25",
    flexDirection: "row",
  },
  column: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  box: {
    flexGrow: 1, 
    width: "calc(33% - 2px)", 
    margin: "2px",
    height: "100px", 
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default ProfileTab;