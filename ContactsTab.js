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
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_1.jpg'),
                }}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: "10px"}}>C.Ronaldo 1</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 7911 123456</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "right", justifyContent: "right", padding: "20px"}}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_1" })}>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "left", justifyContent: "left", padding: "20px"}}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_2.jpg'),
                }}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: "10px"}}>C.Ronaldo 2</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 8221 987654</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "right", justifyContent: "right", padding: "20px"}}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_2" })}>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "left", justifyContent: "left", padding: "20px"}}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_3.jpg'),
                }}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: "10px"}}>C.Ronaldo 3</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 7610 112233</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "right", justifyContent: "right", padding: "20px"}}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_3" })}>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "left", justifyContent: "left", padding: "20px"}}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={{width: "30%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_4.jpg'),
                }}
              />
          </View>
          <View style={{width: "40%"}}>
          <Text style={{fontSize: 14, paddingBottom: "10px"}}>C.Ronaldo 4</Text>
          <Text style={{color: 'gray', fontSize: 11}}>+44 9411 671236</Text>
          </View>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "right", justifyContent: "right", padding: "20px"}}>
          <FontAwesomeIcon icon={ faVideo } size={40}/>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_4" })}>
          <View style={{width: "15%", display: 'flex', flexDirection: "row", alignItems: "left", justifyContent: "left", padding: "20px"}}>
          <FontAwesomeIcon icon={ faMessage } size={30}/>
          </View>
          </TouchableOpacity>
        </View>
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
    margin: "2px",
    height: "100px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  }
});

export default ContactsTab;