import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Buttons from '../components/button';
import ButtonsCheck from '../components/buttonCheck';

async function resetRouter() {
  fetch('http://192.168.0.110:8080/reboot')
    .then( (response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
}


export default function routerController() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Router Controller</Text>
      <StatusBar style="auto" />
      <ButtonsCheck></ButtonsCheck>
      <Buttons text='Reset Router' fun={resetRouter}></Buttons>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99ff99',
  },
});