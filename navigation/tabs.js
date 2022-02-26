import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile';
import HomeNavigation from '../screens/HomeNavigation.js';
import MentalHealthNavigation from "../screens/MentalHealthNavigation";
import Donors from '../screens/Donors';

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
  const email = route.params.text;
  return (
    <Tab.Navigator initialRouteName="Profile" activeColor="#fff">
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Features',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen  
        name="MentalHealthNavigation"
        component={MentalHealthNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Mental Health',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="md-person-add-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        initialParams={{text: email}}
        name="Donate"
        component={Donors}
        options={{
          headerShown: false,
          tabBarLabel: 'Donate',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
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
