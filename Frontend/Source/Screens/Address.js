import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  PermissionsAndroid,
} from "react-native";

import Geolocation from "react-native-geolocation-service";
import MapView, { Callout, Marker } from "react-native-maps";
import PlainBtn from "../Components/Fwdbutton";
import "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import Searchbar from "../Components/SearchBar";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import GeocoderAsync from "react-native-geocoding";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function Address({ route, navigation }) {
  // const { data } = route.params;

  GeocoderAsync.init("AIzaSyDsds1ygp7T_BAtYX5bfS3KPWWjjfektLE", {
    language: "en",
  }); // use a valid API key

  const confirmBtnProps = {
    text: "Confirm Address",
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: "black",
    color: "white",
    textTransform: "capitalize", //uppercase, lowercase, capitalize, none
  };

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [spinner, setSpinner] = useState(false);

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 12.9453,
    longitude: 77.653,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  });

  useEffect(() => {
    try {
      let { status } = Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let location = Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.log(error);
    }
  }, []);

  /**
   * Get the current location of the user,
   * set the location to the current location,
   * set the current region to the current location,
   * set the spinner animation based on intermediate states
   *
   * @return {*}
   */
  const getLocation = async () => {
    try {
      setSpinner(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        accuracy: 5,
        timeInterval: 1000,
      });
      // console.log(location);
      setLocation(location);
      setCurrentRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setSpinner(false);
    } catch (error) {
      console.log(error);
    } finally {
      setSpinner(false);
    }
  };

  /**
   * Handle Region Change based on longitudes and latitudes
   *
   * @param {*} region
   */
  const handleRegionChanged = (region) => {
    setCurrentRegion(region);
  };

  /**
   * Handle Search based on text
   * And set the current region to the searched location
   * And set the search text to the searched location
   * And set the spinner animation based on intermediate states
   *
   * @param {*} text
   */
  const handleSearch = async (text) => {
    if (text.length > 0) {
      setSpinner(true);
      try {
        let res = await GeocoderAsync.from(text).then((json) => {
          var foundLocation = json.results[0].geometry.location;
          setSearchText(foundLocation);
          // console.log(location);
        });
        // console.log(res.results[0].geometry.location);
        setCurrentRegion({
          latitude: res.results[0].geometry.location.lat,
          longitude: res.results[0].geometry.location.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setSpinner(false);
      } catch (error) {
        console.log(error);
      } finally {
        setSpinner(false);
      }
    }
  };

  return (
    <View>
      {/* <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text> */}
      <MapView
        style={{ width: "100%", height: height }}
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        region={currentRegion}
        // animateToRegion={currentRegion}
        // initialRegion={{
        //   // latitude: 12.9453,
        //   // longitude: 77.653,
        //   latitude: 50.444,
        //   longitude: 50.653,
        //   latitudeDelta: 0.05922,
        //   longitudeDelta: 0.05421,
        // }}
      >
        <Marker
          coordinate={{
            // latitude: 12.9553,
            // longitude: 77.653,
            latitude: location ? location.coords.latitude : 15.9553,
            longitude: location ? location.coords.longitude : 75.653,
          }}
          title={"Your Location"}
          draggable={true}
          isPreselected={true}
          onDragEnd={(e) => {
            console.log(e.nativeEvent.coordinate);
          }}

          // onMagicTap={() => {}}
          // description={"description"}
        />
      </MapView>
      {/* </View> */}
      {/* //create a view at the bottom of the screen and call plain button in it */}
      <Callout style={{ ...styles.BottomBtn }}>
        <PlainBtn {...confirmBtnProps} />
      </Callout>
      <Callout style={{ ...styles.topSearchBar }}>
        <View style={{ flex: 1, flexDirection: "row", height: 40 }}>
          {/* <Text style={{ color: "grey" }}>Select Location</Text> */}

          <View style={styles.searchContainer}>
            <TextInput
              style={{ ...styles.searchTxt }} //, outlineStyle: "none"
              placeholder={"Search Loaction ..."}
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
              }}
            />
            <FontAwesome
              style={{ ...styles.icon, paddingRight: 15 }}
              name="search"
              size={28}
              color="black"
              onPress={() => {
                handleSearch(searchText);
              }}
            />
            {/* <MaterialIcons
              style={{ ...styles.icon, paddingRight: 15 }}
              name="my-location"
              size={28}
              color="black"
              onPress={() => {
                getLocation();
                // console.log("pressed");
              }}
            /> */}
          </View>
        </View>
      </Callout>
      <Callout style={{ ...styles.topSearchBar }}>
        {spinner ? (
          <View style={{ ...styles.spinner }}>
            <LoadingSpinner />
          </View>
        ) : null}
      </Callout>

      <Callout style={{ ...styles.myLocation }}>
        <MaterialIcons
          style={{ ...styles.iconMyLocation }}
          name="my-location"
          size={28}
          color="black"
          onPress={() => {
            getLocation();
            // console.log("pressed");
          }}
        />
      </Callout>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomBtn: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    bottom: 45,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  topSearchBar: {
    position: "absolute",
    // flex: 1,
    // flexDirection: "row",
    top: 30,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  searchContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // height: "24px",
    verticalAlign: "middle",
    // margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: width * 0.9,
    height: height * 0.07,
  },
  searchTxt: {
    lineHeight: 24,
    color: "black",
    width: width * 0.6,
    height: height * 0.07,
    paddingLeft: 10,
  },
  icon: {
    // marginTop: 15,
    verticalAlign: "middle",
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    marginTop: height * 0.35,
    // marginBottom: height * 0.4,
    // height: height,
    // backgroundColor: "red",
    // width: width,
  },
  spinnerTxt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  myLocation: {
    position: "absolute",
    flex: 1,
    // flexDirection: "row",
    bottom: 140,
    right: 20,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    borderRadius: 100,
    padding: 10,
  },
  iconMyLocation: {
    // marginTop: 15,
    verticalAlign: "middle",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    height: 60,
    width: 60,
    elevation: 9,
    padding: "auto",
    paddingLeft: 16,
  },
});
