import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Screen from "../components/Screen";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { AppLoading } from "expo";
import usersApi from "../api/users";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const FeedScreen = () => {
  const {
    data: users,
    error,
    loading,
    request: loadUsers,
  } = useApi(usersApi.getUsers);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Screen>
      {error && (
        <>
          <Text>Error.....</Text>
        </>
      )}
      <Text>Feed Screen</Text>
      <ActivityIndicator visible={loading} />
      {users?.data?.users?.map((user) => {
        return <Text key={user.id}>{user?.name}</Text>;
      })}
      <Button title="Reload" onPress={loadUsers} />
    </Screen>
  );
};

export default FeedScreen;
