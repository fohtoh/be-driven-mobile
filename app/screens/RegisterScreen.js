import { Formik } from "formik";
import React from "react";
import { Text, Alert, StyleSheet, View } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import { Auth } from "aws-amplify";

const RegisterScreen = ({ navigation }) => {
  const handleRegister = async ({ email, password, fullName }) => {
    try {
      const response = await Auth.signUp({
        username: email,
        email,
        password,
        attributes: {
          name: fullName,
        },
      });
      console.log(response);

      navigation.navigate("Confirmation");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Hoops Development</Text>
        <Text style={styles.text}>
          Create an account and get started today!
        </Text>

        <Formik
          styles={styles.formContainer}
          initialValues={{ email: "", password: "", fullName: "" }}
          onSubmit={(values) => handleRegister(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <View style={styles.formContainer}>
              <TextInput
                autoCapitalize="name"
                autoCorrect={false}
                icon="account"
                onChangeText={handleChange("fullName")}
                placeholder="Full Name"
                textContextType="name"
              />
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

              <Button title="Register" onPress={handleSubmit} />
            </View>
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
  formContainer: {
    marginTop: 20,
  },
  text: {
    textAlign: "center",
  },
  title: {
    color: colors.primary,
    textAlign: "center",
    fontSize: "24",
    padding: 10,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
