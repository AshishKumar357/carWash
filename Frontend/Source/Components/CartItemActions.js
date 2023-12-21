//creating a component that takes height and width input as props and contains 3 buttons for edit, saveForLater and delete.

import react from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function cartItemActions({ ...props }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.container,
        height: props.height,
        width: props.width,
      }}
    >
      <Pressable
        style={{
          ...styles.button,
          width: props.width * 0.8,
        }}
        android_ripple={{ color: "grey" }}
        onPress={() => {
          console.log("edit");
          navigation.navigate("Customize");
          // props.editItem(props.id);
        }}
      >
        <FontAwesome name="edit" size={22} color="black" />
        <Text style={styles.txt} adjustsFontSizeToFit>
          Customize
        </Text>
      </Pressable>
      {/* <Pressable
        style={{ ...styles.button, width: props.width * 0.3 }}
        android_ripple={{ color: "grey" }}
      >
        <FontAwesome name="save" size={24} color="black" />
        <Text style={styles.txt2}>Save For Later</Text>
      </Pressable> */}
      <Pressable
        style={{
          ...styles.button2,
          // width: props.width * 0.2,
          // backgroundColor: "#f2f2f2",
          alignSelf: "flex-end",
        }}
        android_ripple={{ color: "#151515" }}
        onPress={() => {
          console.log("delete");
          // props.deleteItem(props.id);
        }}
      >
        <FontAwesome name="trash-o" size={21} color="black" />
        {/* <Text style={{ ...styles.txt, color: "white" }}>Delete</Text> */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    marginVertical: 10,
    alignItems: "center",
    // backgroundColor: "red",
    // alignSelf: "flex-start",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    padding: 5,
    borderRadius: 10,
    // verticalAlign: "center",
    // elevation: 1,
  },
  button2: {
    // flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    verticalAlign: "middle",
    marginLeft: 10,
    // marginTop: 10,
    // elevation: 9,
  },
  txt: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
  },
  txt2: {
    fontWeight: "bold",
    // marginLeft: 3,
    fontSize: 18,
  },
});
