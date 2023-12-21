// a tile component to show a item in the cart with image and other purchase details
// Path: Frontend/Source/Components/cartItemTile.js

import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import imgs from "../assets/carwash.jpg";
import CartQuantityBtn from "./CartQuantityBtns.js";
import CartItemActions from "./CartItemActions.js";
import { FontAwesome5 } from "@expo/vector-icons";

export default function cartItemTile(props) {
  var offer = " " + `\u20B9` + " 220  ";

  var newHeight = props.height * 0.7 > 150 ? props.height * 0.65 : 150;

  return (
    <View
      style={{
        ...styles.tileBg,
        height: props.height * 0.95,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <View>
          <Image
            style={{
              ...styles.image,
              height: newHeight,
              // height: props.height * 0.7,
              width: props.width * 0.35,
            }}
            source={imgs}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            width: props.width * 0.5,
            height: props.height * 0.6,
            alignSelf: "stretch",
          }}
        >
          <Text
            style={{
              ...styles.headingTxt,
              height: props.height * 0.1,
              width: props.width,
            }}
            // numberOfLines={1}
            adjustsFontSizeToFit
          >
            Car Wash Serivce
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: props.height * 0.06,
            }}
          >
            <Text
              style={{
                ...styles.badge,
                // width: props.width * 0.2,
                // height: props.height * 0.06,
                paddingHorizontal: 5,
              }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {offer}
            </Text>
            <Text
              style={{ color: "#53c41a", fontWeight: "bold", marginLeft: 10 }}
            >
              Saved
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              height: props.height * 0.1,
              marginLeft: -8,
            }}
          >
            <Text style={styles.PriceCurrency}>
              {(() => sub(" ", `\u20B9`))()}
            </Text>
            <Text style={styles.finalPrice}>780</Text>
            <Text style={{ ...styles.PriceDecimals, top: 0 }}>
              {(() => sub(" ", "00"))()}
            </Text>
          </View>
          <View style={{ flexDirection: "row", height: props.height * 0.09 }}>
            <Text
              style={styles.tileText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Duration:
            </Text>
            <Text
              style={styles.dataText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              1 Month
            </Text>
          </View>
          <View style={{ flexDirection: "row", height: props.height * 0.09 }}>
            <Text
              style={styles.tileText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Wash Type:
            </Text>
            <Text
              style={styles.dataText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Exterior
            </Text>
          </View>
          <View style={{ flexDirection: "row", height: props.height * 0.09 }}>
            <Text
              style={styles.tileText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Wash Frequency:
            </Text>
            <Text
              style={styles.dataText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Daily
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                ...styles.tileText,
                verticalAlign: "top",
              }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Location:
            </Text>
            <Text
              style={styles.dataText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Sector 62, Noida
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#000",
          borderBottomWidth: 1,
          width: props.width * 0.9,
          paddingVertical: 5,
        }}
      />
      <CartItemActions width={props.width * 0.9} height={props.height * 0.1} />
    </View>
  );
}

const sub = (base, exponent) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontSize: 30 }}>{base}</Text>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{exponent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tileBg: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 8,
    borderColor: "#000",
    borderWidth: 1,
    alignSelf: "flex-start",
  },

  imageBg: {
    position: "relative",
    backgroundColor: "#fff",
    verticalAlign: "middle",
    alignSelf: "flex-start",
  },
  image: {
    borderRadius: 10,
    marginTop: 10,
  },

  headingTxt: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
    // width: "auto",
  },
  // css to add finalprice text at the bottom right of the tile

  tileText: {
    // fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    paddingVertical: 3,
  },
  dataText: {
    // fontSize: 14,
    fontWeight: "bold",
    color: "#0890D1",
    paddingVertical: 3,
    verticalAlign: "middle",
    marginLeft: 5,
  },
  badge: {
    backgroundColor: "#53c41a",
    color: "white",
    textAlign: "center",
    borderRadius: 5,
    fontWeight: "bold",
  },
  PriceCurrency: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  PriceDecimals: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    top: 3,
  },
  finalPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    top: -6,
  },
});
