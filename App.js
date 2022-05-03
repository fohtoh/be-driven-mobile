import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return <AuthNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'dodgerblue',
    // flexDirection: "row",
    justifyContent: "flex-end",

    // alignItems: 'flex-end',

    // justifyContent: 'center',
    // width: "75%",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "75%",
  },
});
