import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider.android.js';
import LoginNavigation from './LoginNavigation';

import TabNavigation from './TabNavigation';
const Routes = () => {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
   
    if (initializing) setInitializing(false);
  }

  const [user, setUser] = useState(AuthContext);
  const [initializing, setInitializing] = useState(true);

  if (initializing) return null;

  return (
    <NavigationContainer independent={true}>
      {user ? <TabNavigation userinfo={user}/> : <LoginNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
