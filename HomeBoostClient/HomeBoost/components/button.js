import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

  

const Buttons = props => {
    const {container} = styles;
    const {fun} = props;

  return (
    <TouchableOpacity style={container} onPress={fun}>
        <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      height: 50,
      width: 200,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
  });


  export default Buttons