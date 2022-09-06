import React, { useState, useCallback, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileTab from './ProfileTab.js';
import ContactsTab from './ContactsTab.js';
import ChatsTab from './ChatsTab.js';

import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from './redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

function ListProfileScreen({ navigation }) {
    return (
      <ProfileTab navigation={navigation}/>
  );
}

function ContactsScreen({ navigation }) {
    return (
      <ContactsTab navigation={navigation}/>
  );
}

function ChatsScreen({ navigation }) {
    return (
      <ChatsTab navigation={navigation}/>
  );
}

function SecondPage({navigation}) {
  const { name, age } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(setAge(12));
  }, []);
  useEffect(() => {
    var newMessage = [{}];

    checkMessageStorage().then(checkMessage => {
      if(checkMessage != null) {
        newMessage = checkMessage;
        dispatch(setName(JSON.stringify(newMessage)));
      }
    });
  }, [])

  async function checkMessageStorage() {
    const oldMessage = await AsyncStorage.getItem("chat_1");
    var oldMessageJson = JSON.parse(oldMessage);
    
    if(oldMessage != null) {
      return oldMessageJson;
    }
  
    return null;
  }

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#000000', 
      tabBarIndicatorStyle: {
        backgroundColor: '#077FFF',
      },
      tabBarItemStyle: { borderBottomColor: '#D9D9DA',
      borderBottomWidth: 1, },
    }}>
          <Tab.Screen name="Profile" component={ListProfileScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Chats" component={ChatsScreen} />
      </Tab.Navigator>
  );
}
  
export default SecondPage;