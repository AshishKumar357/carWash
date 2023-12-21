import React, { Component, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ContinueBtn from "../Components/Fwdbutton";
import PriceContainer from "../Components/PriceContainer";
import axiosRequestHandler from "../Utils/Handler";
import "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

export default function InstantService({ ...props }) {
  const navigation = useNavigation();

  const [typeOfWash, setTypeOfWash] = useState("Select");
  const [isLoading, setIsLoading] = useState(false);
  const ContinueBtnProps = {
    text: "Confirm Address",
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "black",
    color: "white",
    textTransform: "capitalize", //uppercase, lowercase, capitalize, none
  };

  const handleSubmit = async (typeOfWash) => {
    if (typeOfWash == "Select") {
      Alert.alert("Please select a type of wash");
    } else {
      setIsLoading(true);
      console.log("submiting request");
      const data = {
        typeOfWash: typeOfWash,
      };

      navigation.navigate("Address", { data: typeOfWash });
    }
  };
  return (
    <ScrollView>
      <Text style={styles.Heading} numberOfLines={1} adjustsFontSizeToFit>
        Instant Service
      </Text>
      <Text style={styles.SubHeading} numberOfLines={2} adjustsFontSizeToFit>
        Book a service with our partner right now!
      </Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.text}>Type of Wash</Text>
            <Text style={{ color: "red" }}> *</Text>
          </View>
          <Picker
            id="tow"
            style={styles.input}
            selectedValue={typeOfWash}
            onValueChange={(ValuePicked) => {
              setTypeOfWash(ValuePicked);
            }}
            disabled={isLoading}
          >
            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="Exterior" value="1" />
            <Picker.Item label="Interior" value="2" />
            <Picker.Item label="Other" value="3" />
          </Picker>
        </View>
      </View>

      <View style={{ ...styles.ContinueBtn }}>
        <ContinueBtn
          {...ContinueBtnProps}
          onPress={() => handleSubmit(typeOfWash)}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 20,
  },
  SubHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 20,
    color: "#A0A0A0",
  },
  container: {
    marginHorizontal: 20,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "stretch",
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 55,
    backgroundColor: "#FFFFFF",
    // borderRadius: 10,
    padding: 10,
    marginTop: 5,
    verticalAlign: "middle",
  },
  simulateButton: {
    backgroundColor: "#FFD428",
    borderRadius: 10,
    // marginTop: 40,
    // padding: 10,
    // marginHorizontal: 20,
  },

  ContinueBtn: {
    // backgroundColor: "#FFD428",
    borderRadius: 10,
    marginVertical: 40,
    // padding: 10,
    marginHorizontal: 20,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    verticalAlign: "middle",
    // margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  searchSection: {
    backgroundColor: "#ffffff",
    flex: 1,
    // margin: 10,
    height: 24,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    // backgroundColor: "red",
  },
  modalView: {
    width: width * 0.8,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // backgroundColor: "red",
    // marginBottom: 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // backgroundColor: "red",
    backgroundColor: "black",
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "red",
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    // backgroundColor: "red",
  },
});
