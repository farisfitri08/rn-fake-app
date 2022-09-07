import React, { useState, useCallback, useEffect } from 'react'
import { View, Button, Text, Animated, Image, StyleSheet, Alert  } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from "./images";
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from './redux/actions';

export default function Chat({navigation, textName}) {
  const [messages, setMessages] = useState([]);
  const [nowOnlineStatus, setNowOnlineStatus] = useState('Online');
  const { name, age } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  var autoMessages = require('./autoChat.json');

  async function load() {
    var messageString = JSON.stringify(messages);
    if(messages.length != 0) {
      await AsyncStorage.setItem(textName, messageString);
      var resultText = {};
        messages.map((user, userKey) => {
          if(userKey == 0)  {
            name[textName] = user.text;
          }
        })
        resultText = name;
        dispatch(setName(resultText));
    }
  }

  async function checkMessageStorage() {
    const oldMessage = await AsyncStorage.getItem(textName);
    var oldMessageJson = JSON.parse(oldMessage);
    
    if(oldMessage != null) {
      return oldMessageJson;
    }

    return null;
  }

  useEffect(()=>{
    (async ()=>load())()
  },[])

  useEffect(() => {
    var newMessage = [
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];

    checkMessageStorage().then(checkMessage => {
      if(checkMessage != null) {
        newMessage = checkMessage;
      }

      setMessages(newMessage);
    });
  }, [])

  useEffect(() => {
    
    var sizeMessages = Object.keys(messages).length;
    if(sizeMessages > 0) {
    
      var lastMessage = messages[0];

      var nowOnlineStatus = "Online";
      if (('chat' in lastMessage)) {
        nowOnlineStatus = "Typing...";
      }

      setNowOnlineStatus(nowOnlineStatus);
      navigation.setOptions({ headerTitle: (props) => <LogoTitle {...props} textName={textName}/> });
      (async ()=>load())()
    }
     
  }, [messages, textName]);

  function LogoTitle({e, textName}) {
    const pictureNameString = textName.split("_");
    let noPicture = pictureNameString[1];
    if(!noPicture) noPicture = 1;
    let pictureName = "cr_"+noPicture;
    let pictureRef = images[pictureName];

    return (
      <View style={styles.box}>
            <View><Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={pictureRef}
            /></View>
            <View style={{display: 'flex', flexDirection: "column", justifyContent: "center"}}>
              <Text style={{paddingLeft: 10, fontWeight: 'bold', fontSize: 15}}>Cristiano Ronaldo {noPicture}</Text>
              <Text style={{paddingLeft: 10, color: 'gray', fontSize: 11}}>{nowOnlineStatus}</Text>
            </View>
          </View>
        
    );
  }

  const onSend = useCallback((messages = []) => {

    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    load(messages);
    autoBot();
    
  }, [])

  const autoBot = useCallback ((messages = []) => {
    setTimeout(() => {
      let newId = Math.floor(Math.random() * 100);
      var countJson = Object.keys(autoMessages).length;
      var randomNoJson = Math.floor(Math.random() * countJson);
      var randonJsonValue = autoMessages[randomNoJson];
      
      var autoMessagesString = JSON.stringify(randonJsonValue);

      var parsedString = autoMessagesString.replace(/@\{(\w+)\}/g, function(match, group) {
        if (group === 'currentdate') {
          return new Date();
        } else if(group === 'id') {
          return newId;
        }
      });

      var autoMessage = JSON.parse(parsedString);
      
      setMessages(previousMessages => GiftedChat.append(previousMessages, autoMessage))

      load(autoMessage);
    }, 3000);

  }, []);
  
  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    box: {
      display: 'flex',
      flexDirection: "row",
    }
  
  });

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}