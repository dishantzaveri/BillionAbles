import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const VisuallyImpaired = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('TextToSpeech')}>
        <Text style={styles.optionsTitle}>Text To Speech</Text>
        <Text style={styles.optionsDesc}>This feature will convert the text given by the user into speech</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('SpeechToText')} >
        <Text style={styles.optionsTitle}>Speech To Text</Text>
        <Text style={styles.optionsDesc}>This feature will convert the speech given by the user into text</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('Object Detection')} >
        <Text style={styles.optionsTitle}>Object Detection</Text>
        <Text style={styles.optionsDesc}>This feature will detect the object that will be shown by the user from the camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VisuallyImpaired;

const styles = StyleSheet.create({
    options:{
        padding:10,
        backgroundColor:"white",
        elevation:3,
        height:150,
        marginTop:20,
        marginHorizontal:10
    },
    optionsTitle:{
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"Roboto",
        color:"black"
    },
    optionsDesc:{
        fontSize:18,
        lineHeight:20,
        marginTop:20
    }
});
