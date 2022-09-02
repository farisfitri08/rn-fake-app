import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// const ronaldo_1 =  require('./picture/ronaldo_1.jpg');

function ProfileTab({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('About', { pictureName: 'cr_1' })}>
          <View style={styles.column}>
            <Image
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                  source={{
                    uri: require('./picture/cr_1.jpg'),
                  }}
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
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                  source={{
                    uri: require('./picture/cr_2.jpg'),
                  }}
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
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                  source={{
                    uri: require('./picture/cr_3.jpg'),
                  }}
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
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                  source={{
                    uri: require('./picture/cr_4.jpg'),
                  }}
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