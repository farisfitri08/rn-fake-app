import { View, Button, Text, Animated, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './Chat.js';
import Child from './Child.js';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [data, setData] = useState('online');

  const [storeData, setStoreData] = useState([{}]);

  useEffect(()=>{
    clear()
  },[])

  async function clear() {

    await AsyncStorage.clear()
  }

  async function store() {
    
    const chat = [
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ];

    var messageString = JSON.stringify(chat);

    await AsyncStorage.setItem('chat_1', messageString);
  }
  async function load() {
    const oldMessage = await AsyncStorage.getItem('chat_1');
    var oldMessageJson = JSON.parse(oldMessage);
    
    if(oldMessage != null) {
      const new_chat = [
        {
          _id: 1,
          text: 'Testing two',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/150/150/any',
          },
        },
      ];

      oldMessageJson = oldMessageJson.concat(new_chat);

      var newData = JSON.stringify(oldMessageJson);
      
      await AsyncStorage.setItem('chat_1', newData);
      setStoreData(newData);
    }
  }

  useEffect(()=>{
    (async ()=>load())()
  },[])
    
    const onlineStatus = (onlineData) => {
      setData(onlineData);
    }
  

  function Home({ navigation }) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.paragraph}>{JSON.stringify(storeData, null, 2)}</Text>
      <Button title="store" onPress={store} />
      <Text>{'\n'}</Text>
      <Text style={styles.paragraph}>Load contents of JSON</Text>
      <Button title="load" onPress={load} />
      <Text>{'\n'}</Text>

        <Button
          title="Chat 1"
          onPress={() => navigation.navigate('Chat1')}
        />
        <Text>{'\n'}</Text>
        <Button
          title="Chat 2"
          onPress={() => navigation.navigate('Chat2')}
        />
      </View>
    );
  }
  
  function Profile({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
  function Chat1({ navigation }) {
    return (
      <Chat onlineStatus={onlineStatus} navigation={navigation}/>
    );
  }
  
  function Chat2({ navigation }) {
    return (
      <Chat />
    );
  }
  
  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
  
    return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  };
  
  function LogoTitle(e) {

    return (
      <View style={styles.box}>
            <View><Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://crop-circle.imageonline.co/image.png',
              }}
            /></View>
            <View style={{display: 'flex', flexDirection: "column", justifyContent: "center"}}>
              <Text style={{paddingLeft: 10, fontWeight: 'bold', fontSize: 15}}>Cristiano Ronaldo</Text>
              <Text style={{paddingLeft: 10, color: 'gray', fontSize: 11}}>{data}</Text>
            </View>
          </View>
        
    );
  }
  
  
  const Stack = createStackNavigator();
  
  
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Chat1"
          component={Chat1}
          options={{ headerStyleInterpolator: forFade, headerTitleAlign: 'center', headerTitle: (props) => <LogoTitle {...props} />,}}
        />
        <Stack.Screen
          name="Chat2"
          component={Chat2}
          options={{ headerStyleInterpolator: forFade }}
        />
      </Stack.Navigator>
    );
  }
  
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
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
  });
  
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}