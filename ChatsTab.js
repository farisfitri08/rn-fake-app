import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ChatsTab({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_1" })}>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={require('./picture/cr_1.jpg')}
              />
          </View>
          <View style={{width: "70%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 1</Text>
          <Text style={{color: 'gray', fontSize: 11}}>Message</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_2" })}>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={require('./picture/cr_2.jpg')}
              />
          </View>
          <View style={{width: "70%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 2</Text>
          <Text style={{color: 'gray', fontSize: 11}}>Message</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_3" })}>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={require('./picture/cr_3.jpg')}
              />
          </View>
          <View style={{width: "70%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 3</Text>
          <Text style={{color: 'gray', fontSize: 11}}>Message</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_4" })}>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{width: 50, height: 50, borderRadius: 50}}
                source={require('./picture/cr_4.jpg')}
              />
          </View>
          <View style={{width: "70%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 4</Text>
          <Text style={{color: 'gray', fontSize: 11}}>Message</Text>
          </View>
        </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    margin: 2,
    height: 100,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  }
});

export default ChatsTab;