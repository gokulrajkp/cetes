import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommunityMainScreen from "./src/screens/CommunityMainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CommunityMainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
