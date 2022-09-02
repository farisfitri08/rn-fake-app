import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function ContactsTab({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
          <View style={{width: "20%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_1.jpg'),
                }}
              />
          </View>
          <View style={{width: "50%"}}>
          <Text style={{fontSize: 14}}>C.Ronaldo 1</Text>
          <Text style={{color: 'gray', fontSize: 10}}>+621203934812736</Text>
          </View>
          <View style={{width: "30%"}}>
          <FontAwesomeIcon icon="fa-solid fa-video" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{width: "20%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_2.jpg'),
                }}
              />
          </View>
          <View style={{width: "50%"}}>
          <Text style={{fontSize: 14}}>C.Ronaldo 2</Text>
          <Text style={{color: 'gray', fontSize: 10}}>+621203934812736</Text>
          </View>
          <View style={{width: "30%"}}>
          <FontAwesomeIcon icon="fa-solid fa-video" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{width: "20%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_3.jpg'),
                }}
              />
          </View>
          <View style={{width: "50%"}}>
          <Text style={{fontSize: 14}}>C.Ronaldo 3</Text>
          <Text style={{color: 'gray', fontSize: 10}}>+621203934812736</Text>
          </View>
          <View style={{width: "30%"}}>
          <FontAwesomeIcon icon="fa-solid fa-video" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{width: "20%", textAlign: "center", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <Image
                style={{ width: 50, height: 50, borderRadius: "50%" }}
                source={{
                  uri: require('./picture/cr_4.jpg'),
                }}
              />
          </View>
          <View style={{width: "50%"}}>
          <Text style={{fontSize: 14}}>C.Ronaldo 4</Text>
          <Text style={{color: 'gray', fontSize: 10}}>+621203934812736</Text>
          </View>
          <View style={{width: "30%"}}>
          <FontAwesomeIcon icon="fa-solid fa-video" />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  column: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    margin: "2px",
    height: "100px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
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

export default ContactsTab;