import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import "react-native-gesture-handler";

// imports for components
import StackNavigatorHome from "../Stack/StackHome";
import StackNavigatorPlans from "../Stack/StackMyPlan";
import StackNavigatorProfile from "../Stack/StackProfile";
import PaymentScreen from "../../Screens/PaymentScreen";

// initialising the navigators
const Tab = createBottomTabNavigator();

/**
 * Tab Navigator for the App
 * @returns Tab Navigator
 */
export default function TabGroup({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "My Plans") {
            iconName = focused
              ? "ticket-confirmation"
              : "ticket-confirmation-outline";

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "Edit") {
            iconName = focused ? "hourglass" : "edit";
            return <AntDesign name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        headerShown: false, // comment if we want to add a header on each Tab
        // tabBarShowLabel: false,                  //uncomment incase if we want to remove Labels from tabbar icons
      })}
    >
      <Tab.Screen name="Home" component={StackNavigatorHome} />
      <Tab.Screen
        name="My Plans"
        component={StackNavigatorPlans}
        options={{ tabBarBadge: 1 }}
      />
      <Tab.Screen name="Profile" component={StackNavigatorProfile} />

      <Tab.Screen name="Edit" component={PaymentScreen} />
    </Tab.Navigator>
  );
}
