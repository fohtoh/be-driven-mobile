import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const Heading = ({ children }) => {
  return (
    <View>
      <Text style={styles.container}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: colors.medium,
  },
});

export default Heading;
