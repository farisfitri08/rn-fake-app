import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ProfileTab({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('About', { pictureName: 'cr_1' })}>
          <View style={styles.column}>
            <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={require('./picture/cr_1.jpg')}
                />
            <Text style={{fontSize: 14}}>C.Ronaldo 1</Text>
            <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('About', { pictureName: 'cr_2' })}>
          <View style={styles.column}>
            <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={require('./picture/cr_2.jpg')}
                />
            <Text style={{fontSize: 14}}>C.Ronaldo 2</Text>
            <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('About', { pictureName: 'cr_3' })}>
          <View style={styles.column}>
            <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={require('./picture/cr_3.jpg')}
                />
            <Text style={{fontSize: 14}}>C.Ronaldo 3</Text>
            <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('About', { pictureName: 'cr_4' })}>
          <View style={styles.column}>
            <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={require('./picture/cr_4.jpg')}
                />
            <Text style={{fontSize: 14}}>C.Ronaldo 4</Text>
            <Text style={{color: 'gray', fontSize: 10}}>Active Now</Text>
          </View>
        </TouchableOpacity>
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
    width: "32%", 
    margin: 2,
    height: 100, 
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default ProfileTab;