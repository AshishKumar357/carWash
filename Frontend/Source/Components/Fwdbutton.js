// ButtonPrimary.js
import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import componentCalls from "../componentCalls";

export default function fwdbutton(props) {
  return (
    <View
      style={{
        ...styles.button,
        // width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
      }}
    >
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: "red", borderless: true }}
      >
        <Text
          style={{
            ...styles.buttonText,
            width: props.width,
            height: props.height,
          }}
        >
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#030303",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    flexDirection: "row",
  },
  buttonText: {
    fontWeight: "bold",
    // textTransform: "none",
    fontSize: 16,
    textAlign: "center",
    color: "white",
    verticalAlign: "middle",
  },
});
