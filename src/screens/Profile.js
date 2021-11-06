import React, { useCallback, useMemo, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Carrear from "../component/Carrear";
import BottomSheet from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("screen");

export default function Profile() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "55%"], []);
  //   const []

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={{ height: height - height / 4 }}>
          <View style={{ backgroundColor: "#0b1a30" }}>
            <View style={{ flexDirection: "row" }}>
              {/* <Text
                style={{
                  textAlign: "center",
                  color: "#87b1e8",
                  padding: 4,
                  fontWeight: "bold",
                  flex: 1,
                  marginLeft: 60,
                }}
              >
                Bio
              </Text> */}
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <MaterialIcon name="pencil" size={20} color="gray" />
                <Text style={{ color: "white", paddingLeft: 10, paddingEnd: 10, fontSize: 16 }}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: "#c4f0f5",
                alignSelf: "center",
                margin: 8,
              }}
            >
              <Image
                source={require("../assets/profile_img.webp")}
                style={{ width: "100%", height: "100%", borderRadius: 60 }}
                resizeMode="cover"
              />
            </View>
            <Text style={{ textAlign: "center", padding: 8, color: "white", fontWeight: "bold" }}>Ronaldo</Text>
          </View>
          <View style={{ marginTop: 6 }}>
            {/* <Profile_field /> */}
            {/* <ScrollView> */}

            <Text style={{ color: "#cac9cd", marginLeft: 10, marginRight: 10 }}>Email</Text>
            <Text style={{ padding: 2, marginLeft: 10, marginRight: 10 }}>ronaldo@gmail.com</Text>
            <View
              style={{
                alignSelf: "center",
                marginTop: 8,
                marginBottom: 8,
                width: "90%",
                height: 2,
                backgroundColor: "#dddddd",
              }}
            />
            <Text style={{ color: "#cac9cd", marginLeft: 10, marginRight: 10 }}>Phone</Text>
            <Text style={{ padding: 2, marginLeft: 10, marginRight: 10 }}>9923343423</Text>
            <View
              style={{
                alignSelf: "center",
                marginTop: 8,
                marginBottom: 8,
                width: "90%",
                height: 2,
                backgroundColor: "#dddddd",
              }}
            />
            <Text style={{ color: "#cac9cd", marginLeft: 10, marginRight: 10 }}>Gender</Text>
            <Text style={{ padding: 2, marginLeft: 10, marginRight: 10 }}>Male</Text>
            <View
              style={{
                alignSelf: "center",
                marginTop: 8,
                marginBottom: 8,
                width: "90%",
                height: 2,
                backgroundColor: "#dddddd",
              }}
            />

            <Text style={{ color: "#cac9cd", marginLeft: 10, marginRight: 10 }}>Date of Birth</Text>
            <Text style={{ padding: 2, marginLeft: 10, marginRight: 10 }}>23 -34-2021</Text>
            <View
              style={{
                alignSelf: "center",
                marginTop: 8,
                marginBottom: 8,
                width: "90%",
                height: 2,
                backgroundColor: "#dddddd",
              }}
            />

            <Text style={{ color: "#cac9cd", marginLeft: 10, marginRight: 10 }}>Blood Gorup</Text>
            <Text style={{ padding: 2, marginLeft: 10, marginRight: 10 }}>B+</Text>
            <View
              style={{
                alignSelf: "center",
                marginTop: 8,
                marginBottom: 8,
                width: "90%",
                height: 2,
                backgroundColor: "#dddddd",
              }}
            />

            <Text style={{ color: "#cac9cd", marginLeft: 10, marginRight: 10 }}>District</Text>
            <Text style={{ padding: 2, marginLeft: 10, marginRight: 10 }}>Malapuram</Text>
            <View
              style={{
                alignSelf: "center",
                marginTop: 8,
                marginBottom: 8,
                width: "90%",
                height: 2,
                backgroundColor: "#dddddd",
              }}
            />

            <View style={styles.credintials}>
              <Text style={styles.profile_data_holder}>Zone :</Text>
              <Text style={styles.profile_data}>Malapuram</Text>
            </View>
            <View style={styles.credintials}>
              <Text style={styles.profile_data_holder}>Home Ground :</Text>
              <Text style={styles.profile_data}>Malapuram</Text>
            </View>
            <View style={styles.credintials}>
              <Text style={styles.profile_data_holder}>Favourite Position :</Text>
              <Text style={styles.profile_data}>Sricker</Text>
            </View>
            <View style={styles.credintials}>
              <Text style={styles.profile_data_holder}> See Fav Position:</Text>
              <Text style={styles.profile_data}>Sricker</Text>
            </View>
            <View style={styles.credintials}>
              <Text style={styles.profile_data_holder}> Strong Foot:</Text>
              <Text style={styles.profile_data}>left</Text>
            </View>
            <View style={styles.credintials}>
              <Text style={styles.profile_data_holder}> Boot Size :</Text>
              <Text style={styles.profile_data}>9</Text>
            </View>
            <View style={[styles.credintials, { marginBottom: 30 }]}>
              <Text style={styles.profile_data_holder}> T-Shirt size :</Text>
              <Text style={styles.profile_data}>M</Text>
            </View>
            {/* </ScrollView> */}
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{ borderWidth: 1, borderColor: "#d4d4d4", elevation: 28, zIndex: 10, borderRadius: 15 }}
      >
        <View style={styles.contentContainer}>
          <Text style={{ textAlign: "center", fontWeight: "bold", padding: 6 }}>CARRER</Text>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Goal :</Text>
            <Text style={styles.profile_data}>10</Text>
          </View>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Assist :</Text>
            <Text style={styles.profile_data}>10</Text>
          </View>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Interception :</Text>
            <Text style={styles.profile_data}>10</Text>
          </View>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Save :</Text>
            <Text style={styles.profile_data}>10</Text>
          </View>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Clean Sheet :</Text>
            <Text style={styles.profile_data}>10</Text>
          </View>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Free Kick Goal :</Text>
            <Text style={styles.profile_data}>10</Text>
          </View>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Penalty Goal :</Text>
            <Text style={styles.profile_data}>10</Text>
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
  },
  credintials: {
    flexDirection: "row",
    margin: 8,
    marginLeft: 12,
    marginRight: 12,
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#aedcf2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  profile_data_holder: {
    width: "40%",
  },
  profile_data: {
    color: "#ffffff",
    textAlign: "left",
  },
});
