// creating a component as a tile that holds an image on the left and text on the right
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import imgs from "../assets/carwash.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //importing icons from expo

export default function Tile(props) {
  var TextOnTile = "";
  var iconName = "";

  if (props.Varient === "Subscription") {
    TextOnTile = "Monthly Subscription";
    iconName = "calendar-month";
  } else if (props.Varient === "Schedule") {
    TextOnTile = "Schedule Service";
    iconName = "clock";
  } else if (props.Varient === "Custom") {
    TextOnTile = "Instant Service";
    iconName = "car-wash";
  } else {
    TextOnTile = "Error";
    iconName = "car";
  }

  return (
    <View>
      <View
        style={{ ...styles.tileBg, width: props.width, height: props.height }}
      >
        <View style={styles.imageBg}>
          {/* <Image
            source={imgs}
            style={{
              ...styles.image,
              height: props.height * 0.5,
              width: props.width * 0.2,
            }}
          /> */}
          <MaterialCommunityIcons
            name={iconName}
            size={props.height * 0.3}
            color="black"
          />
        </View>

        <Text
          style={{
            ...styles.tileText,
            height: props.height * 0.5,
            width: props.width * 0.7,
          }}
        >
          {TextOnTile}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tileBg: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    // backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
  },
  imageBg: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  tileText: {
    marginLeft: 10,
    color: "black",
    fontWeight: "bold",
    // textTransform: "uppercase",
    fontSize: 14,
    // textAlign: "center",
    backgroundColor: "transparent",
    verticalAlign: "middle",
  },
  image: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 360,
  },
});
