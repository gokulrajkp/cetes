import React, { useCallback, useMemo, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, StatusBar } from "react-native";
import Carrear from "../component/Carrear";
import BottomSheet from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontawseome from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("screen");

export default function Profile() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={{ height: height - height / 4 }}>
          <View style={{ backgroundColor: "#564eb1", height: 220 }}>
            <View style={{ justifyContent: "flex-end", alignSelf: "flex-end" }}>
              <Fontawseome name="user-edit" color="#f4f4f4" size={18} style={{ paddingRight: 14, paddingTop: 14 }} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/profile_img.webp")}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <Text style={{ color: "#ffffff", marginTop: 8 }}>Ronaldo</Text>
              <Text style={{ color: "#f4f4f4", fontSize: 12 }}>
                123456 <Text style={{ color: "#f4f4f4", fontSize: 12 }}>-SETES </Text>
              </Text>
            </View>
          </View>
          {/* Detail Component */}
          <View style={{ marginTop: -20, backgroundColor: "#ffffff", borderRadius: 20 }}>
            <View style={[styles.data_holder, { marginTop: 20 }]}>
              <Text style={styles.profile_label}>Email</Text>
              <Text style={styles.profile_label_data}>ronaldo@gmail.com</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Phone</Text>
              <Text style={styles.profile_label_data}>9923343423</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Gender</Text>
              <Text style={styles.profile_label_data}>Male</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Date of Birth</Text>
              <Text style={styles.profile_label_data}>23 -34-2021</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Blood Gorup</Text>
              <Text style={styles.profile_label_data}>B+</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>District</Text>
              <Text style={styles.profile_label_data}>Malapuram</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Zone</Text>
              <Text style={styles.profile_label_data}>Malapuram</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Home Ground</Text>
              <Text style={styles.profile_label_data}>Malapuram</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Favourite Position</Text>
              <Text style={styles.profile_label_data}>Sricker</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>See Fav Position</Text>
              <Text style={styles.profile_label_data}>Sricker</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Strong Foot</Text>
              <Text style={styles.profile_label_data}>left</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Boot Size</Text>
              <Text style={styles.profile_label_data}>9</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>T-Shirt size</Text>
              <Text style={styles.profile_label_data}>M</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* Bottom sheet  */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backDropColor="red"
        backgroundStyle={{ backgroundColor: "#aba8df" }}
        // customStyles={{
        //   wrapper: {
        //     backgroundColor: "green",
        //   },
        //   draggableIcon: {
        //     backgroundColor: "red",
        //   },
        //   container: {
        //     backgroundColor: "#000",
        //   },
        // }}
        style={{
          // backgroundColor: "red",
          borderWidth: 1,
          borderColor: "#d4d4d4",
          backgroundColor: "#e6e8f3",
          elevation: 28,
          zIndex: 10,
          borderRadius: 20,
        }}
      >
        <View style={styles.contentContainer}>
          <Text style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", padding: 6 }}>CARRER</Text>

          <View style={styles.data_holder}>
            <Text style={styles.profile_label}>Goal</Text>
            <Text style={styles.profile_label_data}>10</Text>
          </View>
          <View style={styles.data_holder}>
            <Text style={styles.profile_label}>Assist</Text>
            <Text style={styles.profile_label_data}>10</Text>
          </View>
          <View style={styles.data_holder}>
            <Text style={styles.profile_label}>Interception</Text>
            <Text style={styles.profile_label_data}>10</Text>
          </View>
          <View style={styles.data_holder}>
            <Text style={styles.profile_label}>Save</Text>
            <Text style={styles.profile_label_data}>10</Text>
          </View>
          <View style={styles.data_holder}>
            <Text style={styles.profile_label}>Clean Sheet</Text>
            <Text style={styles.profile_label_data}>10</Text>
          </View>

          <View style={styles.data_holder}>
            <Text style={styles.profile_label}>Free Kick Goal</Text>
            <Text style={styles.profile_label_data}>10</Text>
          </View>
          <View style={styles.data_holder}>
            <Text style={styles.profile_label}>Penalty Goal</Text>
            <Text style={styles.profile_label_data}>10</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#aba8df",
    // backgroundColor: "#e6e8f3",
  },
  data_holder: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },

  profile_label: {
    fontWeight: "700",
    color: "#cac9cd",
    marginTop: 6,
  },
  profile_label_data: {
    padding: 3,
    fontWeight: "600",
    color: "#000",
  },
});
