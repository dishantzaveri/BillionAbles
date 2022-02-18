import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Speechtotext from '../navigation/Speechtotext.js';
import VisuallyImpaired from './VisuallyImpaired';
import TextToSpeech from './TextToSpeech';
import ObjectDetection from './ObjectDetection';
import ScanToText from "./ScanToText";
const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Visually Impaired" component={VisuallyImpaired} />
      <Stack.Screen name="SpeechToText" component={Speechtotext} />
      <Stack.Screen name="Text To Speech" component={TextToSpeech} />
      <Stack.Screen name="Object Detection" component={ObjectDetection} />
      {/* <Stack.Screen name="Scan To Text" component={ScanToText} /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
