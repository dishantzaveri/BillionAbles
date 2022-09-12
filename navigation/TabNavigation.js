import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatBot from "./ChatBot"
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from "../screens/SignUpScreen"
import Tabs from './tabs';

const Stack = createStackNavigator();
export default function TabNavigation({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
     
          name="tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen name="ChatBot" component={ChatBot} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}
