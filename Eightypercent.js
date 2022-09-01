import { View, Button, Text, Animated, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './Chat.js';
import Child from './Child.js';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [data, setData] = useState('online');

  const [storeData, setStoreData] = useState({});
  async function store() {
    await AsyncStorage.setItem('Foo', 'BAR' + Date.now());
    await AsyncStorage.setItem('Max', JSON.stringify(Math.random()));
  }
  async function load() {
    const sample = `
{
  "SnackDeviceId": "42c01easbeae6d3b52ea",
  "snack-reload-url": "{\\"url\\":\\"exp://exp.host/@snack/sdk.43.0.0-8dYHkOSfdH\\",\\"timestamp\\":1649300280622}",
  "Foo": "BAR1649sadf353538529",
  "EXPO_CONSTANTS_INSTALLATION_ID": "cd147e19-892c-4dec-b307-c243239c8f14",
  "Max": "0.43234314145824015"
}
`;
    const data = JSON.parse(sample);
    const keyValuePairs = Object.entries(data)
      .map(([key, value]) => [key, value])
      .reduce((acc, row) => [...acc, row], []);
    await AsyncStorage.multiSet(keyValuePairs);
    await dump();
  }

  async function dump() {
    const keys = await AsyncStorage.getAllKeys();
    const stores = await AsyncStorage.multiGet(keys);
    const data = stores.reduce(
      (acc, row) => ({ ...acc, [row[0]]: row[1] }),
      {}
    );
    setStoreData(data);
  }

  useEffect(()=>{
    (async ()=>dump())()
  },[])
    
    const onlineStatus = (onlineData) => {
      setData(onlineData);
    }
  

  function Home({ navigation }) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.paragraph}>{JSON.stringify(storeData, null, 2)}</Text>
      <Button title="store" onPress={store} />
      <Text style={styles.paragraph}>Puts the contents of a JSON</Text>
      <Button title="dump" onPress={dump} />
      <Text style={styles.paragraph}>Load contents of JSON</Text>

      <Button title="load" onPress={load} />
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