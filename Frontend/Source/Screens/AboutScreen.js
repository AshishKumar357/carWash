// about screen for CarXWash

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.Heading}>About CarXWash</Text>
        <Text style={styles.Para}>
          CarXWash is a mobile application that allows users to book a car wash
          appointment at a location of their choice. The app is designed to
          provide a convenient and easy way to book a car wash appointment. The
          app is designed for both Android and iOS devices. The app is designed
          to be easy to use and navigate.
        </Text>
        <Text style={styles.Contact}> Contact Us</Text>
        <Text style={styles.Para}>
          Email: caarobaar34@gmail.com {"\n"} Phone: 123-456-7890
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  Para: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  Contact: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
