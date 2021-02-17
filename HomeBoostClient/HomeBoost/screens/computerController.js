import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Buttons from "../components/button";
const wol = require("wakeonlan");

function mute() {
  fetch("http://192.168.0.110:8080/mute")
    .then((response) => {
      //console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function volumePlus() {
  fetch("http://192.168.0.110:8080/volumeplus")
    .then((response) => {
      //console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function volumeMinus() {
  fetch("http://192.168.0.110:8080/volumeminus")
    .then((response) => {
      //console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function shutDown() {
  fetch("http://192.168.0.110:8080/shutdown")
    .then((response) => {
      //console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function turnOn() {
  // MAC is case-insensitive. colons optional
  wol("38:2C:4A:BC:A8:CD").then(() => {
    console.log("wol sent!");
  });
}

export default function computerController() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Computer Controller</Text>
      <Buttons text="Mute" fun={mute}></Buttons>
      <Buttons text="Volume +" fun={volumePlus}></Buttons>
      <Buttons text="Volume -" fun={volumeMinus}></Buttons>
      <Buttons text="Turn On" fun={turnOn}></Buttons>
      <Buttons text="Turn Off" fun={shutDown}></Buttons>
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
