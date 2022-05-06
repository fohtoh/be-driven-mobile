import React, { useState } from "react";
import { AppRegistry } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    // <AuthNavigator/>
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "75%",
  },
});
