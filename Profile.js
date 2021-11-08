import React, { useCallback, useMemo, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import Carrear from "../component/Carrear";
import BottomSheet from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("screen");

export default function Profile() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "75%"], []);
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
            <View style={{ margin: 14 }}>
              <Text style={{ color: "#ffffff", paddingTop: 10,paddingBottom:10, fontSize: 20 }}>
                Profile
              </Text>
              <View
                style={{
                  marginTop: 14,
                  marginBottom: 14,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../assets/profile_img.webp")}
                    style={{ width: 70, height: 70, borderRadius: 35 }}
                    resizeMode="cover"
                  />
                  <View
                    style={{ justifyContent: "space-evenly", marginLeft: 18 }}
                  >
                    <Text style={{ fontSize: 12, color: "#616a73" }}>
                      Hello
                    </Text>
                    <Text style={{ fontSize: 18, color: "#ffffff" }}>
                      Ronaldo
                    </Text>
                  </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <MaterialIcon
                    name="pencil-circle-outline"
                    color="#ffffff"
                    size={26}
                  />
                </View>
              </View>
            </View>
              </View>
          <View style={{ marginTop: 6 }}>
           
            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Email</Text>
              <Text style={styles.profile_label_data}>ronaldo@gmail.com</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Phone</Text>
              <Text style={styles.profile_label_data}>9923343423</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Gender</Text>
              <Text style={styles.profile_label_data}>Male</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Date of Birth</Text>
              <Text style={styles.profile_label_data}>23 -34-2021</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Blood Gorup</Text>
              <Text style={styles.profile_label_data}>B+</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>District</Text>
              <Text style={styles.profile_label_data}>Malapuram</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Zone</Text>
              <Text style={styles.profile_label_data}>Malapuram</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Home Ground</Text>
              <Text style={styles.profile_label_data}>Malapuram</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Favourite Position</Text>
              <Text style={styles.profile_label_data}>Sricker</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>See Fav Position</Text>
              <Text style={styles.profile_label_data}>Sricker</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Strong Foot</Text>
              <Text style={styles.profile_label_data}>left</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Boot Size</Text>
              <Text style={styles.profile_label_data}>9</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

            <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>T-Shirt size</Text>
              <Text style={styles.profile_label_data}>M</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>

          </View>
        </ScrollView>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{
          borderWidth: 1,
          borderColor: "#d4d4d4",
          elevation: 28,
          zIndex: 10,
          borderRadius: 15,
        }}
      >
        <View style={styles.contentContainer}>

          
          <Text style={{ textAlign: "center", fontWeight: "bold", padding: 6 }}>
            CARRER
          </Text>

          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Goal</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Assist</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Interception</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Save</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Save</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Clean Sheet</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Free Kick Goal</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
            </View>
          <View style={{ width: "100%", paddingLeft: 12, paddingRight: 12 }}>
              <Text style={styles.profile_label}>Penalty Goal</Text>
              <Text style={styles.profile_label_data}>10</Text>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  marginBottom: 8,
                  width: "100%",
                  height: 2,
                  backgroundColor: "#dddddd",
                }}
              />
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
  profile_label: {
    fontWeight: "700",
    color: "#cac9cd",
  },
  profile_label_data: {
    padding: 2,
    fontWeight: "700",
    color:"#000"
  },
});
