import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useRef, useEffect } from "react";
import { EvilIcons, Fontisto } from "@expo/vector-icons";

/**
 *
 *
 * @return {*}
 */
const LoadingSpinner = () => {

  // Animation for the spinner
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  // Interpolate the spin value
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["-90deg", "270deg"],
  });

  return (
    <View style={styles.spinnerContainer}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <EvilIcons name="spinner-3" size={100} color="grey" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "transparent",
    borderTopColor: "#000",
  },
});

export default LoadingSpinner;
