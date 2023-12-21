import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from "@env";

export default class PaymentScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          textInComponent : {RAZORPAY_KEY_ID + "   " + RAZORPAY_KEY_SECRET}{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
