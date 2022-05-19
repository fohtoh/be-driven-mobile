import { Formik } from "formik";
import React from "react";
import { Text, Alert } from "react-native";
import Button from "../components/Button";
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
      <Text>Registration screen</Text>

      <Formik
        initialValues={{ email: "", password: "", fullName: "" }}
        onSubmit={(values) => handleRegister(values)}
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
            <TextInput
              autoCapitalize="name"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("fullName")}
              placeholder="Full Name"
              textContextType="name"
            />
            <Button title="Register" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default RegisterScreen;
