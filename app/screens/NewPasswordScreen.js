import React from "react";
import { Text, Alert } from "react-native";
import { Formik } from "formik";
import { Auth } from "aws-amplify";

import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const NewPasswordScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  const handleNewPassword = async ({ email, code, password }) => {
    try {
      const response = await Auth.forgotPasswordSubmit(email, code, password);
      if (response == "SUCCESS") {        

        Alert.alert("Password Reset Successfully", "", [
          { text: "Ok", onPress: () => navigation.navigate("Login") },
        ]);
      }
    } catch (error) {      
      Alert.alert("Oops", error.message);
    }
  };

  return (
    <Screen>
      <Text>New Password Screen</Text>
      <Formik
        initialValues={{ email: "", code: "", password: "" }}
        onSubmit={(values) => handleNewPassword(values)}
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
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Enter your new password"
              secureTextEntry
              textContextType="password"
            />

            <Button title="Submit" onPress={handleSubmit} />
            <Button title="Back to Sign In" onPress={handleSignIn} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default NewPasswordScreen;
