import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Buttons from '../components/button';


export default function routerController() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Router Controller</Text>
      <StatusBar style="auto" />
      <Buttons text='Internet Off'></Buttons>
      <Buttons text='Reset Router'></Buttons>
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