//creating a plain button component which will take text, height, width and onPress function as props
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function plainbtn(props) {
  return (
    <View
      style={{
        ...styles.button,
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        borderWidth: props.border,
      }}
    >
      <Pressable onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    elevation: 3,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    // textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    // backgroundColor: "transparent",
  },
});
