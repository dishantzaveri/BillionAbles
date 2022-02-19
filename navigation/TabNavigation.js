import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatBot from "./ChatBot"

import Tabs from './tabs';

const Stack = createStackNavigator();
export default function TabNavigation({userinfo}) {
  const email=userinfo.email
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
        initialParams={{text:email}}
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
