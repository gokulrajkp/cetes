import * as React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

export default function ReanimateBottom() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <ImageBackground source={require("../assets/carrer_bg_img.jpeg")} style={{ width: "100%", height: "100%" }}>
        <Text>Swipe down to close</Text>
      </ImageBackground>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "papayawhip",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button title="Open Bottom Sheet" onPress={() => sheetRef.current.snapTo(0)} />
      </View>
      <BottomSheet ref={sheetRef} snapPoints={[450, 300, 30]} borderRadius={10} renderContent={renderContent} />
    </>
  );
}
