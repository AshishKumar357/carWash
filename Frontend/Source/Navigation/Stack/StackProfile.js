import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

//screen imports
import EditProfilePage from "../../Screens/EditProfilePage";

//component imports
import DrawerGroup from "../Drawer/Drawer";

const Stack = createNativeStackNavigator();

/**
 * Stack Navigator for Profile Tab
 * @returns Stack Navigator
 */
export default function StackNavigatorProfile() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShowProfile"
        component={DrawerGroup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit"
        component={EditProfilePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
