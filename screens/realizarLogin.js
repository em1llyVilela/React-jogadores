import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';

const realizarLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const tentarLogar = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('PaginaPrincipal');
      })
      .catch(error => {
        console.error('Login failed: ', error);
      });
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/a8/f8/83/a8f883a56eeffc82540b68bab12f08d2.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFC0CB"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#FFC0CB"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={tentarLogar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FF69B4',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 182, 193, 0.2)',
    color: '#FF69B4',
  },
  button: {
    backgroundColor: '#FF1493',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonSecondary: {
    backgroundColor: '#FF69B4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default realizarLogin;
