import { Formik } from "formik";
import React from "react";
import { Text, Alert } from "react-native";
import { Auth } from "aws-amplify";

import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const RegistrationConfirmationScreen = ({ navigation }) => {
  const handleConfirmation = async ({ email, code }) => {
    try {
      const response = await Auth.confirmSignUp(email, code);
      if (response === "SUCCESS") {
        navigation.navigate("Login");
      } else {
        Alert.alert("Oops", "Try again.");
      }
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const handleResendCode = async ({ email }) => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert("Success", "Code was resent to your email");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  return (
    <Screen>
      <Text>Confirm your email</Text>

      <Formik
        initialValues={{ code: "", email: "" }}
        onSubmit={(values) => handleConfirmation(values)}
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
              keyboardType="number-pad"
              onChangeText={handleChange("code")}
              placeholder="Enter your confirmation code"
              textContextType="none"
            />
            <Button title="Confirm" onPress={handleSubmit} />
            <Button title="Resend code" onPress={handleResendCode} />
            <Button title="Back to Sign in" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default RegistrationConfirmationScreen;
