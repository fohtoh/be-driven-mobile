import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import * as Haptics from "expo-haptics";

const AppCheckbox = ({ data }) => {
  const { id, text } = data;
  const [isChecked, setIsChecked] = useState(data?.isChecked);
  const setChecked = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsChecked(!isChecked)
  };

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
      />
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default AppCheckbox;
