import React from "react";
// import Checkbox from "expo-checkbox";
import moment from "moment";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Checkbox from "../components/Checkbox";
import Heading from "../components/Heading";
import Screen from "../components/Screen";

const RecordActivityScreen = () => {
  const isChecked = false;
  const setChecked = () => console.log("clicked");

  const data = [
    { id: 0, text: "Pound Dribble adf das dfdsa fdsa fdsafdsa fdsa fdsa fdsa f dasf", isChecked: true },
    { id: 1, text: "Circle Dribble", isChecked: false },
    { id: 2, text: "Between the legs Dribble", isChecked: false },
    { id: 3, text: "Behind the back", isChecked: false },
    { id: 0, text: "Pound Dribble", isChecked: true },
    { id: 1, text: "Circle Dribble", isChecked: false },
    { id: 2, text: "Between the legs Dribble", isChecked: false },
    { id: 3, text: "Behind the back", isChecked: false },
    { id: 0, text: "Pound Dribble", isChecked: true },
    { id: 1, text: "Circle Dribble", isChecked: false },
    { id: 2, text: "Between the legs Dribble", isChecked: false },
    { id: 3, text: "Behind the back", isChecked: false },
    { id: 0, text: "Pound Dribble", isChecked: true },
    { id: 1, text: "Circle Dribble", isChecked: false },
    { id: 2, text: "Between the legs Dribble", isChecked: false },
    { id: 3, text: "Behind the back", isChecked: false },
    { id: 0, text: "Pound Dribble", isChecked: true },
    { id: 1, text: "Circle Dribble", isChecked: false },
    { id: 2, text: "Between the legs Dribble", isChecked: false },
    { id: 3, text: "Behind the back", isChecked: false },
    { id: 0, text: "Pound Dribble", isChecked: true },
    { id: 1, text: "Circle Dribble", isChecked: false },
    { id: 2, text: "Between the legs Dribble", isChecked: false },
    { id: 3, text: "Behind the back", isChecked: false },
    { id: 0, text: "Pound Dribble", isChecked: true },
    { id: 1, text: "Circle Dribble", isChecked: false },
    { id: 2, text: "Between the legs Dribble", isChecked: false },
    { id: 3, text: "END END END", isChecked: false },
  ];
  console.log(
    "🚀 ~ file: RecordActivityScreen.js ~ line 19 ~ RecordActivityScreen ~ data",
    data[0]
  );

  return (
    <Screen>
        <Heading> {moment().format("MMMM Do YYYY")} </Heading>
      <ScrollView>

        {data?.map((item, index) => {
          return <Checkbox key={index} data={item} />;
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  date: {
    // flex: 1,
    // justifyContent: "center",
    // backgroundColor: "red",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    padding: "110px",
  },
  // section: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   backgroundColor: "red"
  // },
  // paragraph: {
  //   fontSize: 15,
  // },
  // checkbox: {
  //   // backgroundColor: "green"
  //   margin: 8,
  // },
});

export default RecordActivityScreen;
