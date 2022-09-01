import * as React from 'react';
import { View, Button, Text, Animated, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './Chat.js';


function Home({ navigation }) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
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
    <Chat />
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

function LogoTitle() {
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
            <Text style={{paddingLeft: 10, color: 'gray', fontSize: 11}}>Online</Text>
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
        options={{ headerStyleInterpolator: forFade,  headerTitle: (props) => <LogoTitle {...props} />,}}
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
  }

});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}