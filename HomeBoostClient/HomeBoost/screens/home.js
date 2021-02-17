import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Buttons from "../components/button";
import NoConnection from "../components/apiNoConnection";




export default function home({ navigation }) {

  function goComputerControll() {
    navigation.push("ComputerController");
  }

  function goRouterController() {
    navigation.push("RouterController");
  }

  return (
    <SafeAreaView style={styles.container}>
      <NoConnection></NoConnection>
      <Text>HomeBoost App</Text>
      <Buttons text="Computer Control" fun={goComputerControll}></Buttons>
      <Buttons text="Router Control" fun={goRouterController}></Buttons>
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
