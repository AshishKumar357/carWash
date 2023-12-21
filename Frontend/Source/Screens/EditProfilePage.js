// page to take input of user name, email, phone number, gender and age.
// and update the user profile in Database.
import axios from "../axios_configuration";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import Plainbtn from "../Components/Plainbtn";
const { width, height } = Dimensions.get("window");
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import axiosRequestHandler from "../Utils/Handler";

const EditProfilePage = ({ navigation }) => {
  //state
  const [profile, setprofile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    phonenum: "",
  });
  const [gender, setGender] = useState("S");
  // const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  var BtnText = "Save";
  const baseUrl = "http://localhost:13300";

  /** @type {*} */
  const SaveBtn = {
    text: BtnText,
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: "white",
    color: "black",
    border: 1,
    textTransform: "capitalize", //uppercase, lowercase, capitalize, none
  };

  const clearAll = () => {
    console.log("Clear All");
    setprofile({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      phonenum: "",
    });
    setGender({ gender: "Select" });
  };

  const submitData = async (id) => {
    setIsLoading(true);
    if (!id) {
      id = 8;
    }
    let url = `/users/${id}`;
    let method = "PUT";
    let data = JSON.stringify({
      firstname: profile.firstname,
      lastname: profile.lastname,
      age: profile.age,
      gender: gender,
      phonenum: profile.phonenum,
    });
    // console.log(data);
    let response = await axiosRequestHandler(method, data, url);

    if (response.status === 201 || response.status === 200) {
      // console.log("Profile Updated");
      navigation.navigate("ShowProfile");
    } else {
      console.log(response);
      alert("Something went wrong", response.data.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async (id) => {
    if (!id) {
      id = 8;
    }
    let url = `/users/${id}`;
    let method = "GET";
    let data = {};
    let response = await axiosRequestHandler(method, data, url);
    // console.log(response);

    if (response.status === 200) {
      setprofile({
        firstname: response.data[0].firstname,
        lastname: response.data[0].lastname,
        email: response.data[0].email,
        age: response.data[0].age,
        phonenum: response.data[0].phonenum,
      });

      setGender(response.data[0].gender);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleTxt}>Personal Details</Text>
      </View>
      <View style={{ ...styles.body }}>
        <View style={styles.InputView}>
          <Text style={styles.Label}>First Name :</Text>
          <TextInput
            id="fname"
            style={styles.input}
            placeholder="Enter Your First Name Here..."
            placeholderTextColor={"grey"}
            value={profile.firstname || ""}
            onChangeText={(text) => {
              setprofile({ ...profile, firstname: text });
            }}
            disabled={isLoading}
          />
        </View>
        <View style={styles.InputView}>
          <Text style={styles.Label}>Last Name :</Text>
          <TextInput
            id="lname"
            style={styles.input}
            placeholder="Enter Your Last Name Here..."
            placeholderTextColor={"grey"}
            value={profile.lastname || ""}
            onChangeText={(text) => {
              setprofile({ ...profile, lastname: text });
            }}
            disabled={isLoading}
          />
        </View>
        <View style={styles.InputView}>
          <Text style={styles.Label}>Email :</Text>
          <TextInput
            id="email"
            style={styles.input}
            placeholder="Enter Your Email Here..."
            placeholderTextColor={"grey"}
            value={profile.email || ""}
            onChangeText={(text) => {
              setprofile({ ...profile, email: text });
            }}
            disabled={true}
          />
        </View>
        <View style={styles.InputView}>
          <Text style={styles.Label}>Phone :</Text>
          <TextInput
            id="phone"
            style={styles.input}
            placeholder="Enter Your Number Here..."
            placeholderTextColor={"grey"}
            value={profile.phonenum || ""}
            onChangeText={(text) => {
              setprofile({ ...profile, phonenum: text });
            }}
            disabled={isLoading}
          />
        </View>
        <View style={styles.InputView}>
          <Text style={styles.Label}>Age :</Text>
          <TextInput
            id="age"
            style={styles.input}
            placeholder="Enter Your Age Here..."
            placeholderTextColor={"grey"}
            value={profile.age || ""}
            onChangeText={(text) => {
              setprofile({ ...profile, age: text });
            }}
            disabled={isLoading}
          />
        </View>
        <View style={styles.InputView}>
          <Text style={styles.Label}>Gender :</Text>
          <Picker
            id="gender"
            style={styles.input}
            selectedValue={gender}
            onValueChange={(genderPicked) => setGender(genderPicked)}
            disabled={isLoading}
          >
            <Picker.Item label="Select" value="S" />
            <Picker.Item label="Male" value="M" />
            <Picker.Item label="Female" value="F" />
            <Picker.Item label="Other" value="O" />
          </Picker>
        </View>
        <View style={styles.InputView}>
          <Pressable
            style={{
              ...styles.Clearbtn,
              height: height * 0.07,
              width: width / 8,
            }}
            onPress={clearAll}
          >
            <MaterialIcons name="clear-all" size={24} color="black" />
          </Pressable>
          <Plainbtn
            {...SaveBtn}
            style={{
              ...styles.btnSave,
              height: height * 0.07,
              width: width / 4,
              backgroundColor: "white",
              color: "black",
            }}
            // type="submit"
            onPress={() => {
              // navigation.navigate("ShowProfile");
              submitData();
              // getProfile();
            }}
          />
        </View>
        {/* <Text>{JSON.stringify(response)}</Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 10,
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginVertical: 30,
  },
  titleTxt: {
    fontSize: 30,
    // fontWeight: "bold",
    color: "black",
    padding: 20,
    // textAlign: "center",
  },
  InputView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 5,
    paddingHorizontal: 15,
  },
  Label: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "black",
  },
  input: {
    height: 40,
    width: width * 0.6,
    margin: 8,
    // borderWidth: 1,
    // padding: 10,
    // borderWidth: 0.1,
    elevation: 1,
  },
  //  {
  //   shadowColor: "red",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  Clearbtn: {
    backgroundColor: "white",
    color: "black",
    textTransform: "capitalize",
    borderWidth: 1,
    elevation: 3,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginRight: 5,
    justifyContent: "center",
  },
  btnSave: {
    elevation: 3,
    margin: 2,
  },
});

export default EditProfilePage;
