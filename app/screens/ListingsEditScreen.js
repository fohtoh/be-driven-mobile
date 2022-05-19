import React from "react";
import { Button, Text, View } from "react-native";
import * as Haptics from "expo-haptics";

import Screen from "../components/Screen";

const ListingsEditScreen = () => {
  return (
    <Screen>
      <Text>Listings Edit Screen</Text>
      <View>
        <Button
          title="Light"
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        />
        <Button
          title="Medium"
          onPress={() =>
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          }
        />
        <Button
          title="Heavy"
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
        />
      </View>
    </Screen>
  );
};

export default ListingsEditScreen;
