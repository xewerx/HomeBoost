import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Buttons from "../components/button";
import ButtonsCheck from "../components/buttonCheck";

let name = "No connection"; // global variable responsible for internet state on router

function resetRouter() {
  fetch("http://192.168.0.110:8080/reboot")
    .then((response) => {
      //console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function changeInternetState() {
  if (name == "Internet On") {
    fetch("http://192.168.0.110:8080/internetoff")
      .then((response) => {
        //console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    name = "Internet Off";
  } else {
    fetch("http://192.168.0.110:8080/interneton")
      .then((response) => {
        //console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    name = "Internet On";
  }
}

function isOn() {
  fetch("http://192.168.0.110:8080/checkison")
    .then((res) => {
      const internetState = res.headers.get("InternetState");
      if (internetState == "true") name = "Internet On";
      else name = "Internet Off";
    })
    .catch((err) => {
      console.log(err);
    });
}


isOn(); //Check internet state on router, before show button

export default function routerController({ navigation }) {

  function changeInternetStateButton() {  // go home screen and execute change internet state function
    changeInternetState();
    navigation.pop();
  }

  function rebootButton() {  // go home screen and execute change internet state function
    resetRouter();
    navigation.pop();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Router Controller</Text>
      <ButtonsCheck text={name} fun={changeInternetStateButton}></ButtonsCheck>
      <Buttons text="Reset Router" fun={rebootButton}></Buttons>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#99ff99",
  },
});
