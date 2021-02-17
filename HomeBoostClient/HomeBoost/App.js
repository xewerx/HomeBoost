import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './routes/stack';



export default function App() {
  return (
    <Navigator/>
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
