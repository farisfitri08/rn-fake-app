import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';

function AboutPage({pictureName, navigation}) {
    useEffect(() => {
        navigation.setOptions({ headerRight: (props) => <AboutPageTitle pictureName={pictureName} navigation={navigation}/> });
    }, []);

    let pictureReference = {
        cr_1:require('./picture/cr_1.jpg'),
        cr_2:require('./picture/cr_2.jpg'),
        cr_3:require('./picture/cr_3.jpg'),
        cr_4:require('./picture/cr_4.jpg')
    }

    let pictureUrl = pictureReference[pictureName];

    return (
        <View style={styles.container}>
            <View style={styles.box}>
            <Image
                style={{ width: "100%", height: "100%", borderRadius: 25 }}
                resizeMode="contain"
                source={pictureUrl}
            />
            </View>
        </View>
    );
}

function AboutPageTitle({pictureName, navigation}) {
    const pictureNameString = pictureName.split("_");
    let noPicture = pictureNameString[1];
    if(!noPicture) noPicture = 1;
    let chatName = "chat_"+noPicture;

    return (
        <View style={{display: 'flex', flexDirection: "row"}}>
            <TouchableOpacity>
            <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
            <FontAwesomeIcon icon={ faVideo } size={40}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatName: "chat_"+noPicture })}>
            <View style={{alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: 20, paddingTop: 6}}>
            <FontAwesomeIcon icon={ faMessage } size={30}/>
            </View>
            </TouchableOpacity>
        </View>
        
    );
  }

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      flex: 1,
    },
    box: {
      flexGrow: 1, 
      width: "32%", 
      margin: 10,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
    }
  });

export default AboutPage;