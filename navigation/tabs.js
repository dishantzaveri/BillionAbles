import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Speechtotext from './Speechtotext.js';

import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
  const email = route.params.text;
  return (
    <Tab.Navigator initialRouteName="Profile" activeColor="#fff">
      <Tab.Screen
        name="Speechtotext"
        component={Speechtotext}
        options={{
          headerShown: false,
          tabBarLabel: 'Speechtotext',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        initialParams={{text: email}}
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
