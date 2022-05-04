import React from "react";
import { Text } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import Button from "../components/Button";
import routes from "../navigation/routes";

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Login Screen</Text>
      {/* <Button title="Go /> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
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
