import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

// screen imports
import HomePage from "../../Screens/HomePage";
import subscribe from "../../Screens/Subscribe";
import address from "../../Screens/Address";
import ScheduleService from "../../Screens/ScheduleService";
import InstantService from "../../Screens/InstantService";
//todo payment and order summary

const Stack = createNativeStackNavigator();

export default function StackNavigatorHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Subscriptions"
        component={subscribe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScheduleService"
        component={ScheduleService}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InstantService"
        component={InstantService}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Address"
        component={address}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Payment"
        component={payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderSummary"
        component={orderSummary}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
