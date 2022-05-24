import React, { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { Formik } from "formik";
import { Text, Alert } from "react-native";


import ActivityIndicator from "../components/ActivityIndicator";
import AuthContext from "../auth/context";
// import authStorage from "../auth/storage";
import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

// import authApi from "../api/auth";
// import useApi from "../hooks/useApi";
// import useAuth from "../auth/useAuth";

const LoginScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  // const auth = useAuth();
  // const [loginFailed, setLoginFailed] = useState(false);
  // const [failedReason, setFailedReason] = useState();
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    // setLoginFailed(false);
    try {
      //TODO - what do I need to store?  Decoded or not?  If not, how do I know it is valid?
      const response = await Auth.signIn(email, password);
      Auth.currentAuthenticatedUser()
        .then((user) => {
          console.log("🚀 ~ file: LoginScreen.js ~ line 33 ~ .then ~ user", user)
          
          authContext.setUser(user);
        })
        .catch((err) => {
          console.log("🚀 ~ file: LoginScreen.js ~ line 38 ~ handleLogin ~ err", err)
          
          // setUser();
        });
      
      
      
      // authContext.setUser(response);

      //Set user locally
      // authStorage.storeToken(
      //   response?.signInUserSession?.accessToken?.jwtToken
      // );
    } catch (e) {
      Alert.alert("Oops", e.message);
    }

    setLoading(false);
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  // if (loginFailed) {
  //   return (
  //     <Screen>
  //       <Text>Login Failed.</Text>
  //       <Text>{failedReason}</Text>
  //       <Button title="login" onPress={handleSubmit} />
  //     </Screen>
  //   );
  // }

  if (loading) {
    return <ActivityIndicator visible={loading} />;
  }

  return (
    <Screen>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContextType="emailAddress"
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContextType="password"
            />
            <Button title="Login" onPress={handleSubmit} />
            <Button title="Forgot Password" onPress={handleForgotPassword} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;
