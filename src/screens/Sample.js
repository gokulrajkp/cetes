import React, { useCallback, useMemo, useRef } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";

// export default function Sample() {
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

function customBackground({ pointerEvents, style }) {
  return (
    // <ImageBackground
    //   source={require("../assets/carrer_img.png")}
    //   style={{ width: "100%", height: "100%" }}
    //   resizeMode="cover"
    // >
    // <Text>sdfs</Text>
    // </ImageBackground>
    <View style={{ width: "100%", height: 100, backgroundColor: "#ff0000" }}></View>
  );
}

export function RenderSheet() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "70%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      index={1}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundComponent={customBackground}
    >
      <View
      // style={{
      //     backgroundColor: "lightgreen",
      //     marginTop: 30,
      //     flex: 1,
      //     justifyContent: 'center',
      //     alignItems: 'center'
      // }}
      >
        {/* <View style={{ backgroundColor: "white" }}>
            <Text>
                I am back
            </Text>
        </View> */}
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "blue",
  },
});
