import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

// imports for components
import TabGroup from "./Tab/TabBar";
import StackApp from "./Stack/StackApp"; //todo

/**
 * Navigation Container for the App
 * @returns Navigation Container
 */
export default function Navigation({ navigation }) {
  return (
    <NavigationContainer>
      <TabGroup {...navigation} />
    </NavigationContainer>
  );
}
