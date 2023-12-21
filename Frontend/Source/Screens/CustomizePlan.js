// page to edit the details of cart Item

// Path: Frontend/Source/Screens/OrderSummary.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import PlainBtn from "../Components/Plainbtn";
import ContinueBtn from "../Components/Fwdbutton";
import PriceContainer from "../Components/PriceContainer";
const { width, height } = Dimensions.get("window");

export default function CustomizePlan({ navigation, ...props }) {
  const [typeOfWash, setTypeOfWash] = useState("Select");
  const [washPeriod, setWashPeriod] = useState("Select");
  const [washFreq, setWashFreq] = useState("Select");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  var BtnText = "Check Price";

  const SimulateBtnProps = {
    text: BtnText,
    // width: width * 0.8,
    height: height * 0.07,
    backgroundColor: "white",
    color: "black",
    textTransform: "capitalize", //uppercase, lowercase, capitalize, none
    // onPress: () => {
    //   navigation.navigate("Edit");
    // },
  };

  const ContinueBtnProps = {
    text: "Continue to Checkout",
    // width: width * 0.8,
    height: height * 0.07,
    backgroundColor: "black",
    color: "white",
    textTransform: "capitalize", //uppercase, lowercase, capitalize, none
    // onPress: () => {
    //   navigation.navigate("Edit");
    // },
  };

  // simulate price function to toggle the visibility of price container
  const simulatePrice = () => {
    if (isVisible == false) {
      setIsVisible(true);
      console.log("Price Simulated", isVisible);
    } else {
      setIsVisible(false);
      console.log("Price Hidden", isVisible);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.Heading} numberOfLines={1} adjustsFontSizeToFit>
        Customize Your Plan
      </Text>
      <Text style={styles.SubHeading} numberOfLines={2} adjustsFontSizeToFit>
        to get best value from our services tailored just for you
      </Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Type of Wash</Text>
          <Picker
            id="tow"
            style={styles.input}
            selectedValue={typeOfWash}
            onValueChange={(ValuePicked) => setTypeOfWash(ValuePicked)}
            disabled={isLoading}
          >
            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="Exterior" value="1" />
            <Picker.Item label="Interior" value="2" />
            <Picker.Item label="Other" value="3" />
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Wash Period</Text>
          <Picker
            id="washPeriod"
            style={styles.input}
            selectedValue={washPeriod}
            onValueChange={(ValuePicked) => setWashPeriod(ValuePicked)}
            disabled={isLoading}
          >
            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="1 Month" value="1" />
            <Picker.Item label="3 Month" value="3" />
            <Picker.Item label="6 Month" value="6" />
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Wash Frequency</Text>
          <Picker
            id="WashFreq"
            style={styles.input}
            selectedValue={washFreq}
            onValueChange={(ValuePicked) => setWashFreq(ValuePicked)}
            disabled={isLoading}
          >
            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="Daily" value="1" />
            <Picker.Item label="Alternate Days" value="2" />
            <Picker.Item label="Weekly" value="3" />
            <Picker.Item label="ByWeekly" value="4" />
            <Picker.Item label="ByMonthly" value="5" />
          </Picker>
        </View>
        <View style={{ marginTop: 15 }}>
          <PlainBtn
            style={styles.simulateButton}
            {...SimulateBtnProps}
            onPress={simulatePrice}
          />
        </View>
      </View>
      {isVisible ? <PriceContainer /> : null}
      {/* <PriceContainer /> */}
      <View style={{ ...styles.ContinueBtn }}>
        <ContinueBtn
          {...ContinueBtnProps}
          onPress={() => navigation.navigate("OrderSummary")}
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
    margin: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
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
});
