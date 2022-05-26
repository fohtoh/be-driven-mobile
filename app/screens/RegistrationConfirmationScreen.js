import { Formik } from "formik";
import React from "react";
import { Text, Alert, StyleSheet, View } from "react-native";
import { Auth } from "aws-amplify";

import Button from "../components/Button";
import colors from "../config/colors";
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

  const handleNavigateLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text>
          To verify your account, you should have received a confirmation code
          in your email.
        </Text>
        <Text style={styles.highlightText}>
          Enter your email address and confirmation code below.
        </Text>
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
                icon="arrow-right"
                keyboardType="number-pad"
                onChangeText={handleChange("code")}
                placeholder="Enter your confirmation code"
                textContextType="none"
              />
              <Button title="Confirm" onPress={handleSubmit} />
              <Button
                color="secondary"
                title="Resend code"
                onPress={handleResendCode}
              />
              <Button
                color=""
                textColor={colors.black}
                title="Back to Login"
                onPress={handleNavigateLogin}
              />
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  highlightText: {
    color: colors.primary,
    fontSize: "24",
    padding: 10,
    fontWeight: "bold",
  },
});

export default RegistrationConfirmationScreen;
