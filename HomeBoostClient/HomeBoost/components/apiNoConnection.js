import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';


const Info = (props) => {
  const [info, setInfo] = useState("Waiting...");

  fetch("http://192.168.0.110:8080/pingapi")
  .then((res) => {
    setInfo("API is available");
  })
  .catch((err) => {
    setInfo("No connection with API");
  });
  
  return <Text>{info}</Text>;
}

const NoConnection = () => {
  return (
    <View style={{marginBottom: 50}}>
      <Info/>
    </View>
  );
}

export default NoConnection;