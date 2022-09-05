import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text, Picker, Image } from 'react-native';
import Languages from './languages.json';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';


export default class Translator extends Component {

   constructor(props) {
       super(props);
       this.state = {
           languageFrom: "",
           languageTo: "",
           languageCode: 'en',
           inputText: "",
           outputText: "",
           submit: false,
       };
   }

   render() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google,’XXXX’, this.state.languageCode);
       return (
           <View style = {styles.container}>
               <View style={styles.input}>
                   <TextInput
                       style={{flex:1, height: 80}}
                       placeholder="Enter Text"
                       underlineColorAndroid="transparent"
                       onChangeText = {inputText => this.setState({inputText})}
                       value={this.state.inputText}
                   />
               </View>

               <Picker
               selectedValue={this.state.languageTo}
               onValueChange={ lang => this.setState({languageTo: lang, languageCode: lang})}
               >
                   {Object.keys(Languages).map(key => (
                       <Picker.Item label={Languages[key]} value={key} />
                   ))}
               </Picker>

               <View style = {styles.output}>
                  {/* output text displays here.. */}
                  {this.state.submit && <PowerTranslator  text={this.state.inputText} />}
               </View>
               <TouchableOpacity
                   style = {styles.submitButton}
                   onPress = {this.handleTranslate}
               >
                   <Text style = {styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>
           </View>
       )
   }
}

const styles = StyleSheet.create({
   container: {
       paddingTop: 53
   },
   input: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
       borderWidth: .5,
       borderColor: '#000',
       // height: 40,
       borderRadius: 5 ,
       margin: 10
   },
   output: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
       borderWidth: .5,
       borderColor: '#000',
       borderRadius: 5 ,
       margin: 10,
       height: 80,
   },
   submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       borderRadius: 5 ,
       height: 40,
   },
   submitButtonText:{
       color: 'white'
   },
})