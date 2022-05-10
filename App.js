import React, { useState } from "react";
import { AppRegistry } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  const [user, setUser] = useState();
  // const [isReady, setIsReady] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </AuthContext.Provider>
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
