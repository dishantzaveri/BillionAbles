import React , {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Providers from './navigation/Index';
import SplashScreen from 'react-native-splash-screen';


const Stack = createStackNavigator();
function App() {
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 10); 
  }, []);
  
  useEffect(() => {
    hideSplash && SplashScreen.hide();
  }, [hideSplash]);

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
