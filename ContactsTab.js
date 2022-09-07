import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';

function ContactsTab({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require('./picture/cr_1.jpg')}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 1</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 7911 123456</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", padding: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('CameraCall', { cameraCallName: "cr_1" })}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </TouchableOpacity>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: 5, marginTop: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_1" })}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require('./picture/cr_2.jpg')}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 2</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 8221 987654</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", padding: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('CameraCall', { cameraCallName: "cr_2" })}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </TouchableOpacity>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: 5, marginTop: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_2" })}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require('./picture/cr_3.jpg')}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 3</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 7610 112233</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", padding: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('CameraCall', { cameraCallName: "cr_3" })}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </TouchableOpacity>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: 5, marginTop: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_3" })}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require('./picture/cr_4.jpg')}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: 10}}>C.Ronaldo 4</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 9411 671236</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", padding: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('CameraCall', { cameraCallName: "cr_4" })}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </TouchableOpacity>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: 5, marginTop: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_4" })}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    borderBottomColor: '#D9D9DA',
    borderBottomWidth: 1,
  }
});

export default ContactsTab;