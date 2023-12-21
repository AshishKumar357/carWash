import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  Pressable,
} from "react-native";
// import {  } from "react-native-gesture-handler";
const carWashImg = require("../assets/carwash.jpg");
import { Button, Divider } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import Searchbar from "../Components/SearchBar";
import Tile from "../Components/Tile";
import GetProfileData from "../Utils/GetProfileData";

const HomePage = ({ navigation }) => {
  const Tile1Props = {
    width: width * 0.4,
    height: height * 0.1,
    Varient: "Subscription",
    navigation: navigation,
  };
  const Tile2Props = {
    width: width * 0.4,
    height: height * 0.1,
    Varient: "Schedule",
    navigation: navigation,
  };
  const Tile3Props = {
    width: width * 0.4,
    height: height * 0.1,
    Varient: "Custom",
    navigation: navigation,
  };
  const [profileData, setProfileData] = useState({
    id: "",
    firstname: "",
    lastname: "",
  });

  let id = 8;
  useEffect(() => {
    GetProfileData(id).then((profile) => {
      // console.log(profile);
      setProfileData({
        id: profile.id,
        firstname: profile.firstname,
        lastname: profile.lastname,
      });
      console.log(profileData);
    });
  }, []);

  return (
    <ScrollView>
      <Text
        style={{ ...styles.welcometext, height: height * 0.1 }}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        Welcome, {profileData.firstname + " " + profileData.lastname}!
      </Text>
      <Image
        source={carWashImg}
        style={{
          ...styles.WelcomeImg,
          height: height * 0.3,
          width: width * 0.9,
          marginHorizontal: 20,
        }}
        alt="SomeImg"
      />
      <Pressable
        style={{
          // width: width * 0.8,
          marginHorizontal: 20,
          elevation: 5,
        }}
      >
        <Searchbar onPress={() => navigation.navigate("Address")} />
      </Pressable>
      <Text style={styles.Subs} numberOfLines={1} adjustsFontSizeToFit>
        Subscribe To our Services!
      </Text>
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          // justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <View style={styles.dividerH} />
        <View style={styles.dividerH} />
        <View style={styles.dividerH} />
        <View style={styles.dividerH} />
        <View style={styles.dividerH} />
      </View>
      <View style={styles.tileHolder}>
        <View>
          <Pressable onPress={() => navigation.navigate("Subscriptions")}>
            <Tile {...Tile1Props} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("ScheduleService")}>
            <Tile {...Tile2Props} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("InstantService")}>
            <Tile {...Tile3Props} />
          </Pressable>
        </View>
        <View style={styles.dividerV} />
        <View style={styles.tileDiscription}>
          <Text
            style={styles.Choose_Text}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            Choose a plan
          </Text>
          <Text
            style={styles.suits_Text}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            that suits you!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  welcometext: {
    // flex: 1,
    paddingVertical: 24,
    color: "#151515",
    fontSize: 24,
    // fontFamily: "Poppins",
    // fontWeight: "700",
    // lineHeight: 32,
    marginHorizontal: 20,
  },
  //   back: {
  //     backgroundColor: "white",
  //   },
  WelcomeImg: {
    alignItems: "center",
    // resizeMode: "cover",
    // margin: "auto",
    marginHorizontal: 20,
  },
  dividerH: {
    borderWidth: 3,
    borderColor: "#ddd9df",
    marginRight: 5,
    width: width / 6,
    height: 1,
  },
  dividerV: {
    // width: width * 0.8,
    borderWidth: 0.5,
    borderColor: "#ddd9df",
  },
  Subs: {
    // flex: 1,
    padding: 10,
    color: "#030303",
    fontSize: 20,
    // fontFamily: "Poppins",
    fontWeight: "bold",
    // lineHeight: 24,
    textAlign: "center",
    marginHorizontal: 10,
  },
  Choose_Text: {
    color: "#030303",
    fontSize: 16,
    // fontFamily: "Poppins",
    fontWeight: "bold",
    // lineHeight: 22,
    marginHorizontal: 15,
    // paddingTop: 16,
    // paddingLeft: 16,
  },
  suits_Text: {
    color: "#030303",
    fontSize: 16,
    // fontFamily: "Poppins",
    // fontWeight: "500",
    // lineHeight: 18,
    marginHorizontal: 15,
    verticalAlign: "middle",
    // paddingLeft: 16,
  },
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
  searchField: { flex: 1 },
  locationIcon: {
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  tileHolder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
    // backgroundColor: "red",
  },
  tileDiscription: {
    marginHorizontal: 10,
    marginVertical: 10,
    verticalAlign: "middle",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
});

export default HomePage;
