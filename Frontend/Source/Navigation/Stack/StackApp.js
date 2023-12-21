// stack navigation for the whole app from Splash screen to welcome screen and then home

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

// screen imports
import HomePage from "../../Screens/HomePage";
import Welcome from "../../Screens/Welcome";

//component imports
import TabGroup from "../Tab/TabBar";

const Stack = createNativeStackNavigator();

/**
 * Stack Navigator for the App
 * @returns Stack Navigator
 */
export default function StackNavigatorHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeApp"
        component={TabGroup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
