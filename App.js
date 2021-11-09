import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommunityMainScreen from "./src/screens/CommunityMainScreen";
import LogInScreen from "./src/screens/LogInScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./src/screens/Profile";
import Edit_Profile_Screen from "./src/screens/Edit_Profile_Screen";
import { RenderSheet, renderSheet } from "./src/screens/Sample";
export default function App() {
  const Stack = createStackNavigator();
  return (
    // <CommunityMainScreen />
    // <LogInScreen />
    <Profile />
    // <RenderSheet/>
    // <Edit_Profile_Screen />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={LogInScreen} />
    //     <Stack.Screen name="CommunityScreen" component={CommunityMainScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
