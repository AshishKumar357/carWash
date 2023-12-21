import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";

//screen imports
import Profile from "../../Screens/Profile";
import AboutScreen from "../../Screens/AboutScreen";
import RefferalScreen from "../../Screens/RefferalScreen";
import Address from "../../Screens/Address";
//logout imports todo
import HomePage from "../../Screens/HomePage"; //to be removed on logout complete

const Drawer = createDrawerNavigator();

export default function DrawerGroup() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        // drawerType: "slide",
        headerLeft: false,
        headerTitle: " ",
        headerStyle: { backgroundColor: "transparent", borderWidth: 0 },
        // headerTransparent: true,             //uncomment incase if we want to remove header from all screens
        // headerShown: false,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          //change the configuration of our screen
          drawerIcon: ({ color, number, focused }) => {
            //set the icon:
            return (
              //the icon will be an image
              <MaterialCommunityIcons name="account" size={24} color="black" />
            );
          },
        }}
      />

      <Drawer.Screen
        name="My Address"
        component={Address}
        options={{
          drawerIcon: ({ color, number, focused }) => {
            //set the icon for all screens
            return <MaterialIcons name="my-location" size={24} color="black" />;
          },
        }}
      />
      <Drawer.Screen
        name="Refer a Friend"
        component={RefferalScreen}
        options={{
          drawerIcon: ({ color, number, focused }) => {
            //set the icon for all screens
            return (
              <MaterialCommunityIcons name="gift" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color, number, focused }) => {
            //set the icon for all screens
            return (
              <MaterialCommunityIcons
                name="information"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={HomePage}
        listeners={({ navigation }) => ({
          state: (e) => {
            if (e.data.state.index === 3) {
              // 3 is index of logout item in drawer
              // logout code here
              // navigation.dispatch(DrawerActions.closeDrawer());
              // // dispatch({ type: "LOGOUT" });
              // navigation.dispatch(
              //   CommonActions.reset({
              //     index: 0,
              //     routes: [{ name: "WelcomeScreen" }],
              //   })
              // );
              navigation.navigate("Home");
            }
          },
        })}
        options={{
          drawerIcon: ({ color, number, focused }) => {
            //set the icon for all screens
            return (
              <MaterialCommunityIcons name="logout" size={24} color="black" />
            );
          },
        }}
      />
      {/* <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerIcon: ({ color, number, focused }) => {
            return (
              <Image
                source={require("../assets/contact-icon.png")}
                style={{ height: 30, width: 30 }}
              />
            );
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutDrawerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
  },
  logoutText: {
    marginLeft: 20,
    zIndex: 0.5,
  },
});
