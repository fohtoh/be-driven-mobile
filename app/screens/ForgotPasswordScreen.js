import React from "react";
import { Text, Alert, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { Auth } from "aws-amplify";

import Button from "../components/Button";
import colors from "../config/colors";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const ForgotPasswordScreen = ({ navigation }) => {
  const handleForgotPassword = async (data) => {
    try {
      await Auth.forgotPassword(data.email);
      navigation.navigate("New Password");
    } catch (error) {
      Alert.alert("Oops", error.message);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
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

              <Text>
                Enter your email address and instruction to reset your password
                will be emailed to you.
              </Text>
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
});

export default ForgotPasswordScreen;
