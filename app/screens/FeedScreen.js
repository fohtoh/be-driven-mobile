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
  // const [listings, setListings] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState();
  // const [error, setError] = useState(false);
  const { data: users, error, loading, request: loadUsers } = useApi(usersApi.getUsers);

  useEffect(() => {
    loadUsers();
  }, []);

  // const loadUsers = async () => {
  //   setUsers();
  //   setLoading(true);
  //   const response = await usersApi.getUsers();
  //   setLoading(false);

  //   if (!response.ok) return setError(true);

  //   setError(false);
  //   setUsers(response.data);

  //   // if (response.ok) {
  //   // setLoading(false);
  // };

  // console.log("🚀 ~ file: FeedScreen.js ~ line 29 ~ loadUsers ~ response", response)

  // console.log(`data`, data?.data?.users)
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
