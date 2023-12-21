import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import celebrateImage from "../assets/celebrate.png";
import { Dimensions } from "react-native";
import { render } from "react-dom";
const { width, height } = Dimensions.get("window");
import axiosRequestHandler from "../Utils/Handler";

// class PriceContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       price: props.totalPrice,
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     if (props.totalPrice !== state.price) {
//       return {
//         price: props.totalPrice,
//       };
//     }
//     return null;
//   }

//   componentDidMount() {
//     this.setState({ price: this.props.totalPrice });
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.totalPrice !== this.props.totalPrice) {
//       this.setState({ price: this.props.totalPrice });
//     }
//   }

//   render() {

//     return (
//       <View>
//         <View
//           style={{
//             ...styles.PriceContainer,
//             // paddingTop: 30,
//             padding: 10,
//           }}
//         >
//           <View
//             style={{
//               flexDirection: "row",
//               marginTop: 5,
//               height: height * 0.09,
//               marginLeft: -8,
//             }}
//           >
//             <Text style={styles.PriceCurrency}>
//               {(() => sub(" ", `\u20B9`))()}
//             </Text>
//             <Text style={styles.finalPrice}>{this.state.price}</Text>
//             <Text style={{ ...styles.PriceDecimals, top: 0 }}>
//               {(() => sub(" ", "00"))()}
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             ...styles.SimulatedContainer,
//             marginHorizontal: 20,
//             backgroundColor: "white",
//           }}
//         >
//           <Image source={celebrateImage} style={styles.celebrateImage} />
//           <View style={{ flex: 1, alignItems: "center" }}>
//             <Text
//               style={{ fontSize: 18, fontWeight: "bold" }}
//               // numberOfLines={1}
//               adjustsFontSizeToFit
//             >
//               You are saving 20%
//             </Text>
//             <Text
//               style={{ fontSize: 14, color: "#A0A0A0" }}
//               // numberOfLines={1}
//               adjustsFontSizeToFit
//             >
//               by choosing this plan
//             </Text>
//           </View>
//           <Image source={celebrateImage} style={styles.celebrateImageRight} />
//         </View>
//       </View>
//     );
//   }
// }

// export default PriceContainer;

const PriceContainer = ({ ...props }) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    // setPrice(totalPrice);
    console.log("PriceContainer: ", price);
  }, [props.totalPrice]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    //fetch price from backend
    let url = `/price/${props.typeOfWash}/${props.washPeriod}`;
    let method = "GET";
    let data = {};
    let response = await axiosRequestHandler(method, data, url);
    if (response.status == 200 && response.data.length > 0) {
      // console.log("response: ", response.data);
      // setIsVisible(true);
      if (props.washFreq == "1") {
        // daily
        // console.log("response", response.data[0].price);
        setPrice(response.data[0].price * 25); // 25 days in a month after removing sundays);
        // console.log("price", temp, totalPrice);
      } else if (props.washFreq == "2") {
        // alternate days
        setPrice(
          (response.data[0].price * 26) / 2 // 26 days in a month after removing sundays and dividing by 2 for alternate days
        );
      } else if (props.washFreq == "3") {
        // weekly
        setPrice(
          response.data[0].price * 4 // 4 weeks in a month
        );
      } else if (props.washFreq == "4") {
        // byweekly
        setPrice(
          response.data[0].price * 8 // 2 times weeks in a month and 4 weeks a month
        );
      } else if (props.washFreq == "5") {
        // bymonthly
        setPrice(
          response.data[0].price * 2 // 2 times in a month
        );
      }
      // Priceprops.price = totalPrice;
      // console.log(Priceprops.price);
    } else {
      alert("Unable to get data for this combination");
      console.log("response", response);
    }
  };

  return (
    <View>
      <View
        style={{
          ...styles.PriceContainer,
          // paddingTop: 30,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            paddingBottom: 5,
            height: height * 0.09,
            marginLeft: -8,
          }}
        >
          <Text style={styles.PriceCurrency}>
            {(() => sub(" ", `\u20B9`))()}
          </Text>
          <Text style={styles.finalPrice}>{price}</Text>
          <Text style={{ ...styles.PriceDecimals, top: 0 }}>
            {(() => sub(" ", "00"))()}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.SimulatedContainer,
          marginHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <Image source={celebrateImage} style={styles.celebrateImage} />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold" }}
            // numberOfLines={1}
            adjustsFontSizeToFit
          >
            You are saving 20%
          </Text>
          <Text
            style={{ fontSize: 14, color: "#A0A0A0" }}
            // numberOfLines={1}
            adjustsFontSizeToFit
          >
            by choosing this plan
          </Text>
        </View>
        <Image source={celebrateImage} style={styles.celebrateImageRight} />
      </View>
    </View>
  );
};

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
  SimulatedContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: height * 0.13,
    marginHorizontal: 20,
    // marginTop: 30,
    backgroundColor: "#F0F0F0",
    // borderRadius: 10,
  },
  celebrateImage: {
    width: width * 0.2,
    height: height * 0.3,
    resizeMode: "contain",
    margin: 10,
  },
  celebrateImageRight: {
    width: width * 0.2,
    height: height * 0.3,
    resizeMode: "contain",
    // top: 10,
    margin: 10,
    transform: [{ rotateY: "180deg" }],
  },
  PriceCurrency: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  PriceDecimals: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    top: 3,
  },
  finalPrice: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    top: -6,
  },
  PriceContainer: {
    // flex: 0.1,
    // flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    height: height * 0.06,
    marginHorizontal: 20,
    // marginTop: 30,
    backgroundColor: "white",
    // borderRadius: 10,
  },
});

export default PriceContainer;
