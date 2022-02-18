import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import TouchId from 'react-native-touch-id';

export default function auth() {
  TouchId.authenticate('Authenticate', {
    title: 'Fingerprint',
  })
    .then(() => {
      Alert.alert('Login Successful');
    })
    .catch(() => {
      Alert.alert('Invalid Fingerprint');
    });

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#444"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#444"
      />
      <TouchableOpacity style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19181f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    backgroundColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
