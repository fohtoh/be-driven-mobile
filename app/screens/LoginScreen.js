import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { Text, Alert } from "react-native";
import jwtDecode from "jwt-decode";

import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

import authApi from "../api/auth";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import AuthContext from "../auth/context";
// import useAuth from "../auth/useAuth";
import { Auth } from "aws-amplify";
import authStorage from "../auth/storage";

const LoginScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  // const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const [failedReason, setFailedReason] = useState();
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    setLoginFailed(false);
    try {
      const response = await Auth.signIn(email, password);
      console.log(`response`, response);
      // const user = jwtDecode(response?.accessToken?.jwtToken)

      //TODO - what do I need to store?  Decoded or not?  If not, how do I know it is valid?
      // const user = response?.signInUserSession?.accessToken?.jwtToken;

      // authContext.setUser(user);
      authContext.setUser(response);

      //Set user locally
      authStorage.storeToken(
        response?.signInUserSession?.accessToken?.jwtToken
      );
    } catch (e) {
      Alert.alert("Oops", e.message);
    }

    // const session =
    //   result?.data?.data?.authenticateUserWithPassword?.sessionToken;
    // const name = result?.data?.data?.authenticateUserWithPassword?.item?.name;
    // const email =
    //   result?.data?.data?.authenticateUserWithPassword?.item?.email;

    // const userDetails = {
    //   session,
    //   name: result?.data?.data?.authenticateUserWithPassword?.item?.name,
    //   email: result?.data?.data?.authenticateUserWithPassword?.item?.email,
    // };

    // console.log(result?.data?.data?.authenticateUserWithPassword?.sessionToken);
    // if (result?.data?.data?.sessionToken) {
    //   console.log("yay session", result?.data?.data?.sessionToken);
    // } else {
    //   console.log("boo, no token");
    // }
    // if (!result.ok || !session) {
    //  setFailedReason(result?.problem);
    //   setLoginFailed(true); //TODO check for failed
    //   return;
    // }
    // setLoginFailed(false);
    // // console.log("🚀 ~ file: LoginScreen.js ~ line 17 ~ handleSubmit ~ result", result)
    // auth.logIn(userDetails);
    setLoading(false);
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  // const {
  //   data: loginData,
  //   error,
  //   loading,
  //   request: loginUser,
  // } = useApi(authApi.doLogin);

  // console.log(loginData)

  if (loginFailed) {
    return (
      <Screen>
        <Text>Login Failed.</Text>
        <Text>{failedReason}</Text>
        <Button title="login" onPress={handleSubmit} />
      </Screen>
    );
  }

  if (loading) {
    return <ActivityIndicator visible={loading} />;
  }

  return (
    <Screen>
      <Text>Login Screen</Text>

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

      {/* <Button title="login" onPress={handleSubmit} /> */}
      {/* <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>

          </>
        )}
      </Formik> */}
    </Screen>
  );
};

export default LoginScreen;
