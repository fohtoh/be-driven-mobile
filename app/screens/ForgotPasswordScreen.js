import React from "react";
import { Text, Alert } from "react-native";
import { Formik } from "formik";
import { Auth } from "aws-amplify";

import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const ForgotPasswordScreen = ({ navigation }) => {
  const handleForgotPassword = async (data) => {
    try {
      await Auth.forgotPassword(data.email);
      navigation.navigate("NewPassword");
    } catch (error) {
      Alert.alert("Oops", error.message);
    }
  };

  return (
    <Screen>
      <Text>Forgot Password Screen</Text>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => handleForgotPassword(values)}
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

            <Button title="Send" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default ForgotPasswordScreen;
