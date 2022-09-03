import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestingTab from './TestingTab.js';
import ContactsTab from './ContactsTab.js';
import ChatsTab from './ChatsTab.js';

const Tab = createMaterialTopTabNavigator();

function ListProfileScreen({ navigation }) {
    return (
      <TestingTab />
  );
}

function ListProfileOneScreen({ navigation }) {
    return (
      <Text>zxc</Text>
  );
}

function ListProfileTwoScreen({ navigation }) {
    return (
      <Text>we</Text>
  );
}


function Testing({navigation}) {
  return (
    <Tab.Navigator>
          <Tab.Screen name="Profile" component={ListProfileScreen} />
          <Tab.Screen name="Profile1" component={ListProfileOneScreen} />
          <Tab.Screen name="Profile2" component={ListProfileTwoScreen} />
      </Tab.Navigator>
  );
}
  
export default Testing;