import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Buttons from '../components/button';

async function mute() {
  fetch('http://192.168.0.110:8080/mute')
    .then( (response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
}

async function volumePlus() {
    fetch('http://192.168.0.110:8080/volumeplus')
      .then( (response) => {
          console.log(response)
      }).catch((err) => {
          console.log(err)
      });
  }

  async function volumeMinus() {
    fetch('http://192.168.0.110:8080/volumeminus')
      .then( (response) => {
          console.log(response)
      }).catch((err) => {
          console.log(err)
      });
  }

  async function shutDown() {
    fetch('http://192.168.0.110:8080/shutdown')
      .then( (response) => {
          console.log(response)
      }).catch((err) => {
          console.log(err)
      });
  }

  async function turnOn() {
    fetch('http://192.168.0.110:8080/mute')
      .then( (response) => {
          console.log(response)
      }).catch((err) => {
          console.log(err)
      });
  }
export default function computerController() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Computer Controller</Text>
      <StatusBar style="auto" />
      <Buttons text='Mute' fun={mute}></Buttons>
      <Buttons text='Volume +' fun={volumePlus}></Buttons>
      <Buttons text='Volume -' fun={volumeMinus}></Buttons>
      <Buttons text='Turn On' fun={shutDown}></Buttons>
      <Buttons text='Turn Off' fun={turnOn}></Buttons>
      
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