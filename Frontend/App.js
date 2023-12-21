import "react-native-gesture-handler";
import { React } from "react";
import ComponentCalls from "./Source/componentCalls";
import { SafeAreaView } from "react-native";
import GlobalStyle from "./Source/Components/GlobalStyle.js";
import Navigation from "./Source/Navigation/Navigation";

export default function App() {
  return (
    <SafeAreaView
      style={{
        ...GlobalStyle.androidSafeArea,
      }}
    >
      {/* <ComponentCalls /> */}
      <Navigation />
    </SafeAreaView>
  );
}
