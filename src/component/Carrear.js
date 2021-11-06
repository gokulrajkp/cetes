import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, Animated } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function Carrear() {
  const [alignment] = useState(new Animated.Value(0));

  const bindingUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const actionSheetinterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [height / 2.4, 0],
  });

  const actionSheetStyle = {
    transform: [{ translatey: actionSheetinterpolate }],
  };
  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <Text>Carrear</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    borderTopRightRadius: 40,
    width: width / 1.05,
    marginHorizontal: 10,
  },
});
