import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import GlobalStyle from "../Components/GlobalStyle";
import CartItemTile from "../Components/CartItemTile";
import Fwdbutton from "../Components/Fwdbutton";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

const Cart = ({ navigation }) => {
  var TotalItems = 1;
  var TotalSavedItems = 0;
  var TotalPrice = 1000;
  var checkoutBtnText = "Proceed to Checkout  (" + TotalItems + " items)";
  var savedForLaterTxt = "Saved for Later (" + TotalSavedItems + " items):";

  const TileProps = {
    width: width * 0.95,
    height: height * 0.4,
    navigation: navigation,
  };

  return (
    <ScrollView style={styles.GlobalStyle1}>
      <View>
        <Text style={styles.titleTxt}>Subscriptions</Text>
      </View>
      <View style={styles.ScrollContainer}>
        <ScrollView style={styles.scrollView}>
          <View>
            <CartItemTile {...TileProps} style={styles.item} />
            {/* <Text style={{ ...styles.SaveLaterTxt, paddingTop: 10 }}>
              {savedForLaterTxt}
            </Text> */}
          </View>
        </ScrollView>
        {/* <Fwdbutton {...cartItemProps} style={{ ...styles.CartItem }} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  GlobalStyle1: {
    paddingBottom: 10,
  },
  titleTxt: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 20,
  },
  scrollView: {
    margin: 10,
  },
  item: {
    marginVertical: 5,
  },
  ScrollContainer: {
    height: height * 0.85,
    // backgroundColor: "lightgrey",
  },
  CartItem: {
    bottom: 0,
    // margin: 10,
  },
  SaveLaterTxt: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    // alignSelf: "center",
    paddingTop: 20,
  },
});

export default Cart;
