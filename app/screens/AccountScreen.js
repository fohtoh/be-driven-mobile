import React, { useContext } from "react";
import { Text, Alert } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const AccountScreen = () => {
  // const auth = useAuth();
  const authContext = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      authContext.setUser(null);

      //remove user locally
      authStorage.removeToken();
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
  return (
    <Screen>
      <Text>Account Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </Screen>
  );
};

export default AccountScreen;
