import React , {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Providers from './navigation/Index';


const Stack = createStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Providers">
        <Stack.Screen
          name="Providers"
          component={Providers}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
