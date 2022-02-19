import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MentalHeath from './MentalHeath';
import TrackList from './TrackList';
import Track from './TrackPlayer';
import CreateMeme from './CreateMeme';
import OpenBlogScreen from './OpenBlogScreen';
const MentalHealthNavigation = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Mental Health" component={MentalHeath} />
        <Stack.Screen name="TrackList" component={TrackList} />
        <Stack.Screen name="Track" component={Track} />
        <Stack.Screen name="CreateMeme" component={CreateMeme} />
        <Stack.Screen options={{headerShown: false}} name="OpenBlogScreen" component={OpenBlogScreen} />
    </Stack.Navigator>
  )
}

export default MentalHealthNavigation

const styles = StyleSheet.create({})