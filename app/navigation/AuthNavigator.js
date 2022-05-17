import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// import LoginScreen from "../screens/LoginScreen";
import LoginAws from "../screens/LoginAws";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ onLogin }) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginAws} onLogin={onLogin} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
