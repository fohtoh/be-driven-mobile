import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import Screen from '../components/Screen';
import useAuth from "../auth/useAuth";


const AccountScreen = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logOut();
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