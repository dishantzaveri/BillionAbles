import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Speechtotext from '../navigation/Speechtotext.js';
import VisuallyImpaired from './VisuallyImpaired';
import TextToSpeech from './TextToSpeech';
import ObjectDetection from './ObjectDetection';
import CallScreen from '../screens/CallScreen';
import onEnter from '../screens/EnterScreen'
const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}}  name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Visually Impaired" component={VisuallyImpaired} />
      <Stack.Screen options={{headerShown: false}} name="SpeechToText" component={Speechtotext} />
      
      <Stack.Screen options={{headerShown: false}} name="TextToSpeech" component={TextToSpeech} />
      <Stack.Screen options={{headerShown: false}}name="Object Detection" component={ObjectDetection} />
      <Stack.Screen  options={{headerShown: false}} name="CallScreen" component={CallScreen} />
      <Stack.Screen options={{headerShown: false}} name="EnterScreen" component={onEnter} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({
  
});
