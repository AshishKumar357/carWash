// code to handle the schedule service screen

import React, { Component, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import PlainBtn from "../Components/Plainbtn";
import ContinueBtn from "../Components/Fwdbutton";
import PriceContainer from "../Components/PriceContainer";
import axiosRequestHandler from "../Utils/Handler";
import "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import DatePicker from "react-native-modern-datepicker";
import { useNavigation } from "@react-navigation/native";

const ScheduleService = ({ ...props }) => {
  const [typeOfWash, setTypeOfWash] = useState("Select");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const navigation = useNavigation();
  const getCurrentDate = (prop) => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    if (prop == 1) {
      return date + "/" + month + "/" + year; //format: d/m/y;
    } else if (prop == 2) {
      return year + "/" + month + "/" + date; //format: y/m/d;
    } else if (prop == 3) {
      date = new Date().getDate() + 1;
      return year + "/" + month + "/" + date; //format: y/m/d;
    } else if (prop == 4) {
      date = new Date().getDate() + 15;
      return year + "/" + month + "/" + date; //format: y/m/d;
    }
  };

  const startDate = getCurrentDate(3);
  const maxDate = getCurrentDate(4);

  const [date, setDate] = useState("DD/MM/YYYY");

  const [selectedTime, setSelectedTime] = useState("HH:MM (24:Hrs)");

  const ContinueBtnProps = {
    text: "Confirm Address",
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "black",
    color: "white",
    textTransform: "capitalize", //uppercase, lowercase, capitalize, none
    // onPress: () => {
    //   navigation.navigate("Edit");
    // },
  };

  const handleCalendarOnpress = () => {
    setOpenCalender(true);
  };
  const handleCalendarInput = (propdate) => {
    // console.log("Date Selected : ", propdate, typeof propdate);
    var arr = propdate.split("/");
    const datestring = new Date(arr[0], arr[1] - 1, arr[2]);
    // console.log("Date Selected : ", datestring);
    setDate(datestring.toLocaleDateString("en-IN")); //.toLocaleDateString("en-IN")
  };

  const handleTimeOnpress = () => {
    setOpenTime(true);
  };

  const handleTimeInput = (proptime) => {
    setSelectedTime(proptime);
  };

  const handleSubmit = (typeOfWash, date, time) => {
    setIsLoading(true);
    // console.log("inside handle submit");
    console.log(typeOfWash, date, time);
    if (
      typeOfWash == "Select" ||
      date == "DD/MM/YYYY" ||
      time == "HH:MM (24:Hrs)"
    ) {
      Alert.alert(
        "Mandatory Fields !",
        "Please fill in all the details before Submitting",
        [{ text: "OK" }]
      );
    } else {
      const data = {
        type: typeOfWash,
        date: date,
        time: time,
      };
      // axiosRequestHandler("POST", "/api/schedule", data)
      //   .then((response) => {
      //     console.log(response);
      //     setIsLoading(false);
      //     alert("Your service has been scheduled");
      //     navigation.navigate("Home");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setIsLoading(false);
      //     alert("Something went wrong");
      //   });
      navigation.navigate("Address");
    }
  };

  return (
    <ScrollView>
      <Text style={styles.Heading} numberOfLines={1} adjustsFontSizeToFit>
        Schedule Service
      </Text>
      <Text style={styles.SubHeading} numberOfLines={2} adjustsFontSizeToFit>
        to book a timeslot for your car wash
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
              setIsVisible(false);
            }}
            disabled={isLoading}
          >
            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="Exterior" value="1" />
            <Picker.Item label="Interior" value="2" />
            <Picker.Item label="Other" value="3" />
          </Picker>
        </View>
        <View style={styles.row}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.text}>Date of Booking</Text>
            <Text style={{ color: "red" }}> *</Text>
          </View>
          <Pressable style={styles.input} onPress={handleCalendarOnpress}>
            <View style={styles.searchContainer}>
              <View style={styles.searchSection}>
                <Text
                  style={{
                    marginTop: 5,
                    paddingLeft: 5,
                    fontSize: 16,
                  }} // outlineStyle: "none",
                >
                  {date}
                </Text>
              </View>
              <View style={{ paddingRight: 5, marginTop: 5 }}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.row}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.text}>Timing </Text>
            <Text style={{ color: "red" }}> *</Text>
          </View>
          <Pressable style={styles.input} onPress={handleTimeOnpress}>
            <View style={styles.searchContainer}>
              <View style={styles.searchSection}>
                <Text
                  style={{
                    marginTop: 5,
                    paddingLeft: 5,
                    fontSize: 16,
                  }} //outlineStyle: "none",
                >
                  {selectedTime}
                </Text>
              </View>
              <View style={{ paddingRight: 5, marginTop: 5 }}>
                <Entypo name="time-slot" size={22} color="black" />
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={{ ...styles.ContinueBtn }}>
        <ContinueBtn
          {...ContinueBtnProps}
          onPress={() => handleSubmit(typeOfWash, date, selectedTime)}
        />
      </View>

      <Modal animationType="slide" transparent={true} visible={openCalender}>
        <View style={styles.centeredView}>
          <View style={{ ...styles.modalView, height: height * 0.6 }}>
            <Text style={styles.modalText}>Select Date</Text>
            <DatePicker
              options={{
                selectedTextColor: "white",
                textDefaultColor: "black",
                mainColor: "black",
                textSecondaryColor: "black",
                textHeaderColor: "black",
                borderColor: "grey",
              }}
              minimumDate={startDate.toString()}
              maximumDate={maxDate.toString()}
              selected={date.toString()}
              mode="calendar"
              onDateChange={(date) => handleCalendarInput(date)}
              style={{ borderRadius: 10 }}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setOpenCalender(false)}
            >
              <Text style={styles.textStyle}>Select</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={openTime}>
        <View style={styles.centeredView}>
          <View style={{ ...styles.modalView, height: height * 0.5 }}>
            <Text style={styles.modalText}>Select Time : </Text>
            <DatePicker
              minuteInterval={5}
              mode="time"
              onTimeChange={(time) => {
                handleTimeInput(time);
                setOpenTime(false);
              }}
              selected={selectedTime}
              options={{
                mainColor: "black",
              }}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

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

export default ScheduleService;
