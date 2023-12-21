// a component that holds two buttons to increase and decrease the quantity of the item in the cart and also shows the current quantity of the item which is editable

import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function cartQuantityBtns({ width, height }) {
  return (
    <View
      style={{
        ...styles.tileBg,
        flexDirection: "row",
        width: width,
        height: height,
      }}
    >
      {/* button to decrease the quantity */}
      <Pressable onPress={onDecrease} style={styles.btnBg}>
        <FontAwesome name="minus" size={20} color="white" />
      </Pressable>
      {/* input filed to manually enter quantity */}
      <TextInput style={{ ...styles.inptxt, width: width * 0.1 }} />
      {/* button to increase the quantity */}
      <Pressable onPress={onIncrease} style={styles.btnBg}>
        <FontAwesome name="plus" size={20} color="white" />
      </Pressable>
    </View>
  );
}

const onIncrease = () => {
  // use this function to increase the quantity of TextInput using useReducer hooks
  console.log("Value Increased");
};

const onDecrease = () => {
  console.log("Value Decreased");
};

// styling the buttons with border and padding
const styles = StyleSheet.create({
  tileBg: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnBg: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  inptxt: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: 100,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
