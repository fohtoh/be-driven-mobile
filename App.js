import React, { useState } from "react";
import { AppRegistry } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";

import { Auth } from "aws-amplify";

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

function App() {
  const [user, setUser] = useState();
  // const [isReady, setIsReady] = useState(false);

  return (
    // <AuthContext.Provider value={{ user, setUser }}>
      // {user ? <AppNavigator /> : <AuthNavigator />}
    // </AuthContext.Provider>
    <AppNavigator/>
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

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      require: true,
      displayOrder: 1,
      type: String,
    },
    // {
    //   label: "Email",
    //   key: "email",
    //   require: true,
    //   displayOrder: 2,
    //   type: String,
    // },
    {
      label: "Email",
      key: "username",
      require: true,
      displayOrder: 3,
      type: String,
    },
    {
      label: "Password",
      key: "password",
      require: true,
      displayOrder: 4,
      type: "password",
    },    
  ]
}

export default withAuthenticator(App, { signUpConfig });