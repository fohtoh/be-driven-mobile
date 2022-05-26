import React, { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { Formik } from "formik";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import AuthContext from "../auth/context";
import Button from "../components/Button";
import colors from "../config/colors";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

const LoginScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      await Auth.signIn(email, password);
      Auth.currentAuthenticatedUser()
        .then((user) => {
          console.log(
            "🚀 ~ file: LoginScreen.js ~ line 33 ~ .then ~ user",
            user
          );

          authContext.setUser(user);
        })
        .catch((err) => {});
    } catch (e) {
      Alert.alert("Oops", e.message);
    }

    setLoading(false);
  };

  const handleForgotPassword = () => {
    navigation.navigate("Forgot Password");
  };

  if (loading) {
    return <ActivityIndicator visible={loading} />;
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleLogin(values)}
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
              <View style={styles.buttonsContainer}>
                <Button title="Login" onPress={handleSubmit} />
                <Button
                  title="Forgot Password"
                  onPress={handleForgotPassword}
                  color="secondary"
                />
              </View>
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

export default LoginScreen;
