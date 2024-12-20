import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

const CaptainLogin = ({ navigation }) => {
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    if (!userinfo.email || !userinfo.password) {
      Alert.alert('Error', 'Please fill all fields');
      return false;
    }
    if (!userinfo.email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await fetch('YOUR_API_ENDPOINT/captain/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userinfo.email,
            password: userinfo.password,
          }),
        });
        
        const data = await response.json();
        if (data.success) {
          navigation.replace('CaptainHome');
        } else {
          Alert.alert('Error', data.message || 'Login failed');
        }
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Captain Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userinfo.email}
        onChangeText={(text) => setUserinfo({ ...userinfo, email: text })}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={userinfo.password}
        onChangeText={(text) => setUserinfo({ ...userinfo, password: text })}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('CaptainSignup')}>
        <Text style={styles.signupLink}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CaptainLogin;
