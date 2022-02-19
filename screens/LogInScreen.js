import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import { AuthContext } from '../navigation/AuthProvider.android.js';

export default function LogInScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const { login, } = useContext(AuthContext);

  const onSignUpPressed = () => {
    const nameError = nameValidator(name);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (passwordError || emailError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };

  return (
    <Background>
      <Text style={styles.header}>Billion Ables</Text>
      <TextInput 
        label="Name"
        color='#28FF64'
        returnKeyType="next"
        value={name }
        onChangeText={text => setName(text)}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={text => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCompleteType="password"
        keyboardType="default"
      />
      <Button mode="contained" onPress={onSignUpPressed} style={{ marginTop: 6 }}>
        Validate
      </Button>
      <Button
        mode="contained"
        onPress={() => login(email, password)}
        style={{ marginTop: 6 }}>
        LogIn
      </Button>
      <View style={styles.row}>
        <Text style={styles.best}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.link}>  SignUp</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
    color:'#FFFFFF'
  },
  best: {
    
    color:'#FFFFFF'
  },
 header: {
    
  color: theme.colors.primary,
  fontWeight: '700',
    fontSize: 30,
    fontFamily:'Redressed-Regular'
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#28FF64',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0F092D',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0F092D',
    fontWeight: '700',
    fontSize: 16,
  },
});