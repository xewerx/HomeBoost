import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function isOn() {
  let x = fetch("http://192.168.0.110:8080/checkison")
    .then((response) => {
      if (response == "true") return "Internet Off";
      else return "Internet On";
    })
    .catch((err) => {
      console.log(err);
    });

    return x;
}

async function internetOff() {
  fetch("http://192.168.0.110:8080/volumeminus")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

const ButtonsCheck = (props) => {
  const { container } = styles;
  console.log(isOn())
  let name = "...";
  

  return (
    <TouchableOpacity style={container} onPress={internetOff}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0AC237",
    height: 50,
    width: 200,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

export default ButtonsCheck;
