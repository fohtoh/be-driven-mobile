import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import Screen from '../components/Screen';
import useAuth from "../auth/useAuth";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";


const AccountScreen = () => {
  // const auth = useAuth();

  const handleLogout = async () => {
    // auth.logOut();
    await Auth.signOut()
  }
  return (
    <Screen>
      <Text>
        Account Screen
      </Text>
      <Button title="Logout" onPress={handleLogout}/>

    </Screen>
  );
};

export default AccountScreen;