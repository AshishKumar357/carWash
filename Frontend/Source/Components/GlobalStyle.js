//to add any global css, add it here
// Path: Frontend/Source/Components/GlobalStyle.js

import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    // paddingBottom: Platform.OS === "android" ? 35 : 0,
  },
});
