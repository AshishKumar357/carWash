import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = (props) => (
  <View style={styles.searchContainer}>
    <Pressable style={styles.searchSection} onPress={props.onPress}>
      <Text
        style={{ lineHeight: 24, color: "grey" }} //, outlineStyle: "none"
        placeholder={"Select Loaction"}
      >
        Select Location...
      </Text>
    </Pressable>
    <Pressable
      style={{ paddingRight: 10, marginTop: 10 }}
      onPress={props.onPress}
    >
      <MaterialIcons name="location-searching" size={24} color="black" />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "24px",
    verticalAlign: "middle",
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  searchSection: {
    backgroundColor: "#ffffff",
    flex: 1,
    margin: 10,
    height: 24,
  },
});

export default SearchBar;
