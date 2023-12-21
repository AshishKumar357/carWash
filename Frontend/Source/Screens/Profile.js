import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Pressable,
  ImageBackground,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
const image = require("../assets/droplet.jpg");
import Plainbtn from "../Components/Plainbtn";
const { width, height } = Dimensions.get("window");
import "react-native-gesture-handler";
import axiosRequestHandler from "../Utils/Handler";

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    phonenum: "",
    gender: "",
  });

  var BtnText = "Update Profile";
  const EditBtnProps = {
    text: BtnText,
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: "white",
    color: "black",
    textTransform: "capitalize", //uppercase, lowercase, capitalize, none
    onPress: () => {
      navigation.navigate("Edit");
    },
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

    if (response.status == 200) {
      console.log("response: ", response.data);
      setProfile({
        firstname: response.data[0].firstname,
        lastname: response.data[0].lastname,
        email: response.data[0].email,
        age: response.data[0].age,
        phonenum: response.data[0].phonenum,
        gender: response.data[0].gender,
      });
    } else {
      console.log("response", response);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.headerContent}>
          <View style={{ flex: 1 }}>
            {/* <Text style={styles.name}>Welcome</Text>
            <Text style={styles.userInfo}>Aniket Kumar</Text> */}
          </View>
          <View>
            <Image
              style={styles.avatar}
              source={require("../assets/profile.png")}
            />
          </View>
        </View>
        {/* <View>
          <Text style={styles.text}>Wanna got to office?</Text>
        </View> */}
      </View>

      <View style={styles.body}>
        <View style={styles.RectangleShapeView}>
          <Text style={styles.headtText}>Name :</Text>
          <Text style={styles.SubjectText}>
            {profile.firstname + " " + profile.lastname}
          </Text>
        </View>
        <View style={styles.RectangleShapeView}>
          <Text style={styles.headtText}>Email :</Text>
          <Text style={styles.SubjectText}>{profile.email}</Text>
        </View>
        <View style={{ ...styles.RectangleShapeView }}>
          <Text style={styles.headtText}>Phone Number :</Text>
          <Text style={styles.SubjectText}>{profile.phonenum}</Text>
        </View>

        <View style={styles.RectangleShapeView}>
          <Text style={styles.headtText}>Age :</Text>
          <Text style={styles.SubjectText}>{profile.age}</Text>
        </View>
        <View style={{ ...styles.RectangleShapeView, marginBottom: 20 }}>
          <Text style={styles.headtText}>Gender :</Text>
          <Text style={styles.SubjectText}>{profile.gender} </Text>
        </View>

        {/* <br /> */}

        <Plainbtn {...EditBtnProps} style={{ ...styles.btn }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
  },
  header: {
    // backgroundImage: `url(${image})`,
    // backgroundSize: "contain",
    height: 200,
    // width: 100,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    height: 200,
    resizeMode: "cover",
  },

  headerContent: {
    padding: 40,
    alignItems: "center",
    // display: "flex",
    flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginTop: -50,
    // float: "right",
  },
  // location: {
  //   borderColor: "white",
  //   width: 10,
  //   height: 10,
  //   float: "left",
  // },
  // hamburger: {
  //   borderColor: "white",
  //   width: 10,
  //   height: 10,
  //   float: "right",
  // },
  // name: {
  //   fontSize: 22,
  //   color: "black",
  //   fontWeight: "600",
  //   // fontFamily: "Helvetica",
  // },
  headtText: {
    // fontFamily: "Helvetica",
    color: "grey",
    fontWeight: "bold",
    // float: "left",
    marginLeft: 20,
    marginTop: 5,
  },
  SubjectText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    // fontFamily: "Helvetica",
    // float: "left",
    marginLeft: 20,
    marginTop: 5,
  },
  // userInfo: {
  //   fontSize: 20,
  //   color: "white",
  //   fontWeight: "600",
  // },
  btn: {
    elevation: 3,
  },
  body: {
    backgroundColor: "#f2f2f2",
    height: 500,
    alignItems: "center",
  },
  // text: {
  //   color: "white",
  //   margin: 10,
  // },
  RectangleShapeView: {
    marginTop: 10,
    width: "80%",
    height: 60,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3,
  },
});

export default Profile;
