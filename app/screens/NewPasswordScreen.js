import React from "react";
import { Text, Alert, StyleSheet, View} from "react-native";
import { Formik } from "formik";
import { Auth } from "aws-amplify";

import Button from "../components/Button";
import colors from "../config/colors";
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

  const handleNavigateLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text>
          To create a new password for your account, you should have received a
          confirmation code in your email.
        </Text>
        <Text style={styles.highlightText}>
          Enter your email address, confirmation code and new password below.
        </Text>
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
                icon="arrow-right"
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

export default NewPasswordScreen;
