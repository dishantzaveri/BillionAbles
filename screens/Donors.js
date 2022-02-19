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
  const [donorData,setDonorData] = useState([]);
  // useEffect(() => {
  //   const data = [];
  //   firestore()
  //     .collection('donors')      
  //     .onSnapshot(querySnapshot => {
  //       console.log('Total users: ', querySnapshot.size);
  //       querySnapshot.forEach(documentSnapshot => {
  //         console.log(
  //           'User ID: ',
  //           documentSnapshot.id,
  //           documentSnapshot.data(),
  //         );
  //         data.push(documentSnapshot.data());
  //       });
  //     });
  //     setDonorData(data);
  // }, []);

  const getData = () => {
    const data = [];
    firestore()
      .collection('donors')      
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          data.push(documentSnapshot.data());
        });
      });
      setDonorData(data);
  }

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
    <View>
      <ScrollView>
        <View
          style={{
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'red',
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
          <Button onPress={addData} title="Submit" />
        </View>
        <Button onPress={getData} title="Show Donors" />
        <View>
            {
              donorData ? (
              donorData.map((data,i) => (
                <Text key={i}>{data.name}</Text>
              ))
              ):(
                null
              )
            }
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
});
