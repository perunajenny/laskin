import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [numero1, setNumero1] = useState ('');
  const [numero2, setNumero2] = useState ('');
  const [ratkaisu, setRatkaisu] = useState ('');

  const yhteenlasku = () => {
    const tulos = parseInt(numero1) + parseInt(numero2);
    setRatkaisu(tulos);
  }
  const vahennyslasku = () => {
    const tulos = parseInt(numero1) - parseInt(numero2);
    setRatkaisu(tulos);
  }

  return (
    <View style={styles.container}>
      <Text>Ratkaisu: {ratkaisu}</Text>
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={numero1 => setNumero1(numero1)} value={numero1}/>
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={numero2 => setNumero2(numero2)} value={numero2}/>
      <View style={styles.buttonrow}>
        <View style={styles.button}>
      <Button onPress={yhteenlasku} title="+" />
      </View>
      <View style={styles.button}>
      <Button onPress={vahennyslasku} title="-" />
      </View>
      </View>
     
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
  },
  input : {
    width: 75 ,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button : {
    padding: 20,
  },
  buttonrow : {
    flexDirection: 'row'
  }
});
