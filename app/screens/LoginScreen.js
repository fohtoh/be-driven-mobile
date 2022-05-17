import React, { useState } from "react";
import { Text } from "react-native";

import Screen from "../components/Screen";
import Button from "../components/Button";

import authApi from "../api/auth";
// import usersApi from "../api/users";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";

const LoginScreen = () => {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const [failedReason, setFailedReason] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ formEmail, formPassword }) => {
    setLoading(true);
    setLoginFailed(false);
    const result = await authApi.doLogin(
      "jeremy.stowell@gmail.com",
      "drowssap"
    );
    console.log("🚀 ~ file: LoginScreen.js ~ line 24 ~ handleSubmit ~ result", result)

    const session =
      result?.data?.data?.authenticateUserWithPassword?.sessionToken;
    // const name = result?.data?.data?.authenticateUserWithPassword?.item?.name;
    // const email =
    //   result?.data?.data?.authenticateUserWithPassword?.item?.email;

    const userDetails = {
      session,
      name: result?.data?.data?.authenticateUserWithPassword?.item?.name,
      email: result?.data?.data?.authenticateUserWithPassword?.item?.email,
    };

    // console.log(result?.data?.data?.authenticateUserWithPassword?.sessionToken);
    // if (result?.data?.data?.sessionToken) {
    //   console.log("yay session", result?.data?.data?.sessionToken);
    // } else {
    //   console.log("boo, no token");
    // }
    if (!result.ok || !session) {
     setFailedReason(result?.problem);
      setLoginFailed(true); //TODO check for failed
      return;
    }
    setLoginFailed(false);
    // console.log("🚀 ~ file: LoginScreen.js ~ line 17 ~ handleSubmit ~ result", result)
    auth.logIn(userDetails);
    setLoading(false);
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

      <Button title="login" onPress={handleSubmit} />
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
