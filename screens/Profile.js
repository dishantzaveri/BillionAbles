import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider.android.js';

const Profile = ({navigation, route}) => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 250,
            elevation: 3,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <Image
            source={{
              uri: 'https://images.indianexpress.com/2019/02/special.jpg',
            }}
            style={{
              flex: 1,
              resizeMode:"cover",
              elevation: 3,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 20,
            color: 'black',
            marginTop: 20,
          }}>
          About Us
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            style={styles.logo}
            source={require('../assets/billionables.png')}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 20,
              color:"#0F092D"
            }}>
            Billion Ables
          </Text>
        </View>
        <View style={{alignItems: 'center', paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'sans-serif-medium',
            }}>
            We help to ensure that people with disabilities have equal
            opportunities. Having a disability shouldn’t exclude someone from
            the opportunity to be independent. We provide different features for
            the poor differently-abled and help them with communication and to
            overcome stress, anxiety, depression so that they overcome the
            disability and live a normal life.
          </Text>
        </View>
        <View style={{
          flexDirection:"row",
          marginVertical:10,
          justifyContent:"space-around"
        }} >
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => navigation.navigate('ChatBot')}>
            <Text style={styles.panelButtonTitle}>Chat With Us</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => logout()}>
            <Text style={styles.panelButtonTitle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  commandButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#28FF64',
    alignItems: 'center',
    marginTop: 10,   
    
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 30,
  },
});
