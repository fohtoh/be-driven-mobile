import React, { useEffect } from "react";
import { Text } from "react-native";
import Screen from "../components/Screen";
import usersApi from "../api/users";
// import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi"; 
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const FeedScreen = () => {
  const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


  // const {
  //   data: users,
  //   error,
  //   loading,
  //   request: loadUsers,
  // } = useApi(usersApi.getUsers);

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  return (
    // <Screen>
    //   {error && (
    //     <>
    //       <Text>Error.....</Text>
    //     </>
    //   )}
    //   <Text>Feed Screen</Text>
    //   <ActivityIndicator visible={loading} />
    //   {users?.data?.users?.map((user) => {
    //     return <Text key={user.id}>{user?.name}</Text>;
    //   })}
    //   <Button title="Reload" onPress={loadUsers} />
    // </Screen>
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          // uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          uri: "https://hoopsdevelopment-storage-11b603c922019-staging.s3.amazonaws.com/Comeback+win.mov",
          // uri: "https://vimeo.com/476078571",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        {/* <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        /> */}
      </View>
      <View>
        <Text>Here is some text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // // flex: 1,
    // justifyContent: "center",
    // alignItems: "flex-start",
    // alignContent: "flex-start",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FeedScreen;
