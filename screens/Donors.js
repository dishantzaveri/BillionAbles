import React, {Component, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';
const Donors = () => {
  const [selectedValue, setSelectedValue] = useState('Blood Group');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [donorData, setDonorData] = useState([]);
  useEffect(() => {
    firestore()
      .collection('donors')
      .onSnapshot(querySnapshot => {
        setDonorData(
          querySnapshot.docs.map(doc => ({
            data: doc.data(),
          })),
        );
      });
  }, []);

  // const getData = () => {
  //   const data = [];
  //   firestore()
  //     .collection('donors')
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(documentSnapshot => {
  //         console.log(
  //           'User ID: ',
  //           documentSnapshot.id,
  //           documentSnapshot.data(),
  //         );
  //         setDonorData(...donorData,documentSnapshot.data());
  //       });
  //     });
  //   console.log(data);

  // };

  const addData = () => {
    firestore()
      .collection('donors')
      .add({
        name,
        mobile,
        group: selectedValue,
      })
      .then(() => {
        console.log('User added!');
      });
    setName('');
    setMobile('');
    setSelectedValue('Blood Group');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 30,
                color: '#28FF64',
              alignSelf: 'center',
            }}>
            Donate Blood
          </Text>
          <TextInput
            style={{
              fontSize: 18,
              marginVertical: 10,
            }}
            placeholder="Enter Name"
            value={name}
            onChangeText={text => {
              setName(text);
            }}
          />
          <TextInput
            style={{
              fontSize: 18,
              marginVertical: 10,
            }}
            placeholder="Enter Mobile"
            value={mobile}
            onChangeText={text => {
              setMobile(text);
            }}
          />
          <Picker
            style={{
              marginVertical: 10,
            }}
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}>
            <Picker.Item label="Blood Group" value="Blood Group" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B+" value="B-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
          </Picker>
          <View style={{
        color: '#28FF64',
        }} >
          <Button  onPress={addData} title="Submit" />
         </View>
        </View>
        {/* <Button onPress={getData} title="Show Donors" /> */}
        <View style={{
          padding:20
        }} >
          <Text style={{
            fontSize:20,
            marginBottom:20
          }} >Donors</Text>
          {donorData?.map((data, i) => (
            <View key={i} style={{
              padding:20,
              backgroundColor:"white",
              elevation:3,
              flexDirection:"row",
              justifyContent:"space-between",
              marginVertical:10
            }} >
              <Text style={{
                fontSize:16
              }} >{data.data.name}</Text>
              <Text style={{
                fontSize:16
              }}>{data.data.group}</Text>
              <Text style={{
                fontSize:16
              }}>{data.data.mobile}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Donors;

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: '#848484',
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 10,
  },
  container:{
    backgroundColor:'white',
    flex:1
  },
});
