import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../assets/ava.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Hoops Development</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <Button
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.white,
  },
});

export default WelcomeScreen;
