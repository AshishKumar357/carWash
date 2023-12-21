import React, { useEffect } from "react";
import { SafeAreaView, Image } from "react-native";
import { Text, StyleSheet, View } from "react-native";
// import { gapi } from "gapi-script";
import Login from "../Components/Login";
import Logout from "../Components/LogoutBtn";
import "react-native-gesture-handler";
const carWashImg = require("../assets/carwash.jpg");

const Welcome = () => {
  // useEffect(() => {
  //   function start() {
  //     // calling the google API
  //     gapi.auth2
  //       .getAuthInstance({
  //         client_id:
  //           "89187994972-ck8sqsfigh6i688abhhj6n7i7k5q2iq0.apps.googleusercontent.com",
  //         scope: [
  //           "https://www.googleapis.com/auth/userinfo.email",
  //           "https://www.googleapis.com/auth/userinfo.profile",
  //         ].join(" "),
  //       })
  //       .attachClickHandler("signin-button", {}, onSuccess, onFailure); // Attach the click handler to the sign-in button
  //   }
  //   gapi.load("client: Auth2", start);
  // });

  /**
   * Handle successful sign-ins.
   */
  var onSuccess = function (user) {
    console.log("Signed in as " + user.getBasicProfile().getName());
  };

  /**
   * Handle sign-in failures.
   */
  var onFailure = function (error) {
    console.log(error);
  };

  return (
    // <SafeAreaView>
    <>
      <View style={styles1.BaseStyle}>
        <View style={styles1.WelcomeImg}>
          <Image source={carWashImg} style={styles1.WelcomeImg} alt="SomeImg" />
        </View>
        <View style={{ margin: "auto" }}>
          <Text style={styles1.welcomeTxt}>Welcome!!</Text>
        </View>
        <View style={styles1.googlebtn}>
          <Login id="signin-button" />
        </View>
      </View>
    </>

    // </SafeAreaView>
  );
};

const styles1 = StyleSheet.create({
  BaseStyle: {
    margin: "auto",
    textAlign: "center",
  },
  googlebtn: {
    margin: 24,
  },
  WelcomeImg: {
    alignItems: "center",
    width: "300px",
    height: "300px",
    marginHorizontal: "auto",
    marginBottom: 24,
    borderRadius: 10,
  },
  welcomeTxt: {
    color: "#151515",
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: "700",
    // lineHeight: "32px",
    display: "block",
    textAlign: "center",
    width: "300px",
  },
});

export default Welcome;
