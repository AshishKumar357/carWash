import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

//screen imports
import Cart from "../../Screens/Cart";
import CustomizePlan from "../../Screens/CustomizePlan";

/**
 * Stack Navigator for My Plans Tab
 * @returns Stack Navigator
 */
const Stack = createNativeStackNavigator();

export default function StackNavigatorPlans() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Customize"
        component={CustomizePlan}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
