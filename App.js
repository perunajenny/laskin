import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [numero1, setNumero1] = useState ('');
  const [numero2, setNumero2] = useState ('');
  const [ratkaisu, setRatkaisu] = useState ('');

  const yhteenlasku = () => {
    Alert.alert('Halusit yhteenlaskun');
  }
  const vahennyslasku = () => {
    Alert.alert('Halusit vähennyslaskun');
  }

  return (
    <View style={styles.container}>
      <Text>Ratkaisu {ratkaisu}</Text>
      <TextInput style={styles.input} onChangeText={numero1 => setNumero1(numero1)} value={numero1}/>
      <TextInput style={styles.input} onChangeText={numero2 => setNumero2(numero2)} value={numero2}/>
      <Button style={styles.button} onPress={yhteenlasku} title="+" />
      <Button style={styles.button} onPress={vahennyslasku} title="-" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  input : {
    width: 50 ,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    width: 30,
    backgroundColor: '#fff',
  }
});
