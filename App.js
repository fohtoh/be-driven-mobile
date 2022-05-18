import React, { useState, useEffect } from "react";
import { AppRegistry } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth, Amplify } from "aws-amplify";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import config from "./src/aws-exports";
import authStorage from "./app/auth/storage";

//Amplify configuration settings
Amplify.configure(config);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  //TODO what validates that the given JWT is valid/expired/etc.

  const restoreToken = async () => {
    const token = await authStorage.getToken();    
    if (!token) return;
    setUser(jwtDecode(token));
  };

  Auth.currentSession().then((res) => console.log(res));

 
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

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

// const signInConfig = {
//   header: "My Customized Sign In",
//   hideAllDefaults: true,
//   signInFields: [
//     {
//       label: "Email",
//       key: "username",
//       require: true,
//       displayOrder: 1,
//       type: String,
//     },
//     {
//       label: "Password",
//       key: "password",
//       require: true,
//       displayOrder: 4,
//       type: "password",
//     },
//   ],
// };

// const signUpConfig = {
//   header: "My Customized Sign Up",
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: "Full name",
//       key: "name",
//       require: true,
//       displayOrder: 1,
//       type: String,
//     },
//     // {
//     //   label: "Email",
//     //   key: "email",
//     //   require: true,
//     //   displayOrder: 2,
//     //   type: String,
//     // },
//     {
//       label: "Email",
//       key: "username",
//       require: true,
//       displayOrder: 3,
//       type: String,
//     },
//     {
//       label: "Password",
//       key: "password",
//       require: true,
//       displayOrder: 4,
//       type: "password",
//     },
//   ]
// }

export default App;
// export default withAuthenticator(App);
