import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileTab from './ProfileTab.js';
import ContactsTab from './ContactsTab.js';
import ChatsTab from './ChatsTab.js';

const Tab = createMaterialTopTabNavigator();

function ListProfileScreen({ navigation }) {
    return (
      <ProfileTab />
  );
}

function ContactsScreen({ navigation }) {
    return (
      <ContactsTab />
  );
}

function ChatsScreen({ navigation }) {
    return (
      <ChatsTab />
  );
}

function SecondPage() {
  return (
    <Tab.Navigator>
          <Tab.Screen name="Profile" component={ListProfileScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Chats" component={ChatsScreen} />
      </Tab.Navigator>
  );
}
  
export default SecondPage;