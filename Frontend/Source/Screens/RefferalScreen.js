//create a bassic refferal Screen

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function RefferalScreen() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.badgeHeading}>Feature Coming Soon</Text>
        <Text style={styles.Heading}>Refer a Friend</Text>
        <Text style={styles.Para}>
          Refer a friend and get your next wash Free. Also, your friend will get
          50% off on their first wash.
        </Text>
        <Text style={styles.LinkHeading}>Link</Text>
        <Text style={styles.Link}> https://someRandomLink.com</Text>
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
  LinkHeading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  Link: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  badgeHeading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "green",
    color: "#ffffff",
    padding: 10,
  },
});
