import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';

function AboutPage({pictureName, navigation}) {
    useEffect(() => {
        navigation.setOptions({ headerRight: (props) => <AboutPageTitle {...props} /> });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
            <Image
                style={{ width: "100%", height: "100%", borderRadius: "25px" }}
                resizeMode="contain"
                source={{
                uri: require(`./picture/${pictureName}.jpg`),
                }}
            />
            </View>
        </View>
    );
}

function AboutPageTitle(e) {

    return (
        <View style={{display: 'flex', flexDirection: "row"}}>
            <View style={{alignItems: "right", justifyContent: "right", padding: "20px"}}>
            <FontAwesomeIcon icon={ faVideo } size={40}/>
            </View>
            <View style={{alignItems: "left", justifyContent: "left", paddingTop: "25px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px"}}>
            <FontAwesomeIcon icon={ faMessage } size={30}/>
            </View>
        </View>
        
    );
  }

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "25",
      flexDirection: "row",
      height: "100%",
    },
    box: {
      flexGrow: 1, 
      width: "calc(33% - 2px)", 
      margin: "10px",
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "25px",
    },
    header: {
        MsFlexAlign: "center",
        MsFlexPack: "center",
        color: "rgba(255, 255, 255, 0.5)",
        MozAlignItems: "center",
        WebkitAlignItems: "center",
        MsAlignItems: "center",
        alignItems: "center",
        display: "-moz-flex",
        display: "-webkit-flex",
        display: "-ms-flex",
        display: "flex",
        MozJustifyContent: "center",
        WebkitJustifyContent: "center",
        MsJustifyContent: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderTop: "0",
        display: "-ms-flexbox",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        paddingBottom: "0px",
        width: "100%",
        height: "400px",
      }
  });

export default AboutPage;