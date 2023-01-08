import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola coder! 👋</Text>
      <Text>Ingresa tu nombre:</Text>
      <TextInput style={styles.input}></TextInput>
      <Button title='Saludar'/>
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
  title: {
    fontSize: 20,
    marginBottom: 50,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
    height: 50,
    marginVertical: 50,
  },
});
