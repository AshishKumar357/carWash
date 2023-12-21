import Fwdbutton from "./Components/Fwdbutton.js";
import Tile from ".//Components/Tile.js";
import Plainbtn from "./Components/Plainbtn.js";
import CartItemTile from "./Components/CartItemTile.js";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import GlobalStyle from "./Components/GlobalStyle.js";
const { width, height } = Dimensions.get("window");

export default function componentCalls() {
  return (
    <SafeAreaView style={GlobalStyle.androidSafeArea}>
      <Fwdbutton
        text="Submit"
        onPress={() => console.log("Submit")}
        width={width}
        height={50}
        backgroundColor="black"
        color="white"
      />
      <Tile
        text="Monthly Subscription"
        onPress={() => console.log("Monthly Subscription")}
        width={width * 0.33}
        height={150}
      />
      <Plainbtn
        text="Chat with Us"
        onPress={() => console.log("Button pressed!")}
        width={width}
        height={50}
      />
      <ScrollView style={styles.scrollView}>
        <View>
          <CartItemTile width={width} height={height * 0.3} />
          <CartItemTile width={width} height={height * 0.3} />
          <CartItemTile width={width} height={height * 0.3} />
        </View>
      </ScrollView>
      <Fwdbutton
        text="Proceed to Checkout"
        onPress={() => console.log("Submit")}
        width={width}
        height={50}
        backgroundColor="#53c41a"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    maxHeight: height,
    width: width,
  },
  scrollView: {
    backgroundColor: "#f0f0f0",
  },
});
