import React, { useCallback, useMemo, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Carrear from "../component/Carrear";
// import BottomSheet from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontawseome from "react-native-vector-icons/FontAwesome5";
import AntIcon from "react-native-vector-icons/AntDesign";
import BottomSheet from "reanimated-bottom-sheet";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("screen");
const carrier_height = height - (height * 4) / 100;

export default function Profile() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 35,
      }}
    >
      <ImageBackground
        imageStyle={{}}
        source={require("../assets/carrer_img.png")}
        style={{ width: "100%", height: "100%", marginTop: 80  }}
        resizeMode="contain"
      >
        {/* <LinearGradient
          colors={["#4a4a4f", "#b4b4db"]}
          start={{ x: 0.4, y: 0.8 }}
          end={{ x: 0.4, y: 0.4 }}
          style={{ backgroundColor: "#000", width: "100%", height: 100, position: "absolute", bottom: 0 }}
        ></LinearGradient> */}
        <View style={styles.contanerImg}>
          <View style={{ width: 50, height: 2, backgroundColor: "#ffffff", marginTop:10, alignSelf: "center" }} />
        </View>
        <View style={styles.contentContainer}>
          <View style={{ flexDirection: "row" ,marginTop:-40}}>
            <View style={{ justifyContent: "center", alignSelf: "center", alignItems: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#ffffff",
                  fontWeight: "bold",
                  // padding: 6,
                  fontSize: 16,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  // marginTop: 28,
                  marginLeft: 170,
                }}
              >
                CARRER
              </Text>
            </View>
            <View style={{ position: "absolute", right: 23 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  backgroundColor: "#564eb1",
                  // padding: 8,
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  alignSelf: "center",
                  justifyContent: "center",
                  marginTop: -15,
                  elevation: 10,
                }}
              >
                {/* <Text style={{ color: "#8e8ad5", marginRight: 4 }}>Share</Text> */}
                <MaterialIcon
                  name="share-variant"
                  color="#ffffff"
                  size={18}
                  style={{ justifyContent: "center", alignItems: "center", alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.data_holder_carrer, { marginTop: 10 }]}>
            <Text style={styles.profile_label_carrer}>Goal</Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>
          <View style={styles.data_holder_carrer}>
            <Text style={styles.profile_label_carrer}>Assistant</Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>
          <View style={styles.data_holder_carrer}>
            <Text style={styles.profile_label_carrer}>Free Kick </Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>
          <View style={styles.data_holder_carrer}>
            <Text style={styles.profile_label_carrer}>Penalty Goal</Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>
          <View style={styles.data_holder_carrer}>
            <Text style={styles.profile_label_carrer}>Interception</Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>
          <View style={styles.data_holder_carrer}>
            <Text style={styles.profile_label_carrer}>Save</Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>
          <View style={styles.data_holder_carrer}>
            <Text style={styles.profile_label_carrer}>Clean Sheet</Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>
          <View style={styles.data_holder_carrer}>
            <Text style={styles.profile_label_carrer}>Penalty Save</Text>
            <Text style={styles.profile_label_data_carrer}>10</Text>
          </View>


          {/* <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#ffffff",
              padding: 8,
              width: 80,
              borderRadius: 6,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#8e8ad5", marginRight: 4 }}>Share</Text>
            <MaterialIcon name="share" color="#8e8ad5" size={20} />
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View>
  );

  const sheetRef = React.useRef(null);

  const bottomSheetRef = useRef(null);
  const bottombar_height = height - 230;

  // const snapPoints = useMemo(() => ["25%", "70%"], []);

  // const handleSheetChanges = useCallback((index) => {
  //   console.log("handleSheetChanges", index);
  // }, []);
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      {/* <View> */}
      <ScrollView style={{}}>
        <View style={{ backgroundColor: "#564eb1", paddingBottom: 35 }}>
          <View style={styles.container_top}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcon name="menu" color="#9e9d9b" size={25} style={{ alignSelf: "center" }} />
              <View style={{ marginLeft: 8, justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", color: "#ffffff" }}>SETES</Text>
                <Text style={{ fontSize: 12, lineHeight: 10, color: "#ffffff" }}>sports</Text>
              </View>
              <Text style={{ marginLeft: 6, marginTop: 6, alignSelf: "center", color: "#ffffff" }}>COMMUNITY</Text>
            </View>

            <View>
              <Fontawseome name="user-edit" color="#f4f4f4" size={18} style={{ paddingRight: 14, paddingTop: 14 }} />
            </View>
          </View>

          <View style={{ alignItems: "center", marginBottom: 10 }}>
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
        <View
          style={{
            marginTop: -35,
            backgroundColor: "#ffffff",
            borderRadius: 35,
            // flex: 1,
            // height: height - 65,
            paddingBottom: 80,
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 4,
              fontWeight: "700",
            }}
          >
            Bio
          </Text>
          <View style={[styles.data_holder, {}]}>
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
      {/* </View> */}
      {/* Bottom sheet  */}

      <BottomSheet ref={sheetRef} snapPoints={["10%", "71%", "10%"]} borderRadius={35} renderContent={renderContent} />

      {/* <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleHeight={0}
        containerHeight={220}
        contentHeight
        containerOffset
        topInset={100}
        backDropColor="red"
        backgroundStyle={[
          styles.contanerImg,
          { backgroundColor: "#8e8ad5", borderTopLeftRadius: 35, borderTopRightRadius: 35 },
        ]}
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
          borderRadius: 35,
        }}
      >
        <ImageBackground
          source={require("../assets/carrer_bg_img.jpeg")}
          imageStyle={{ borderRadius: 10 }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        >
          <View style={styles.contentContainer}>
            <Text
              style={{
                textAlign: "center",
                color: "#ffffff",
                fontWeight: "bold",
                padding: 6,
                marginTop: 12,
              }}
            >
              CARRER
            </Text>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Goal</Text>
              <Text style={styles.profile_label_data_carrer}>10</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Assist</Text>
              <Text style={styles.profile_label_data_carrer}>10</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Interception</Text>
              <Text style={styles.profile_label_data_carrer}>10</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Save</Text>
              <Text style={styles.profile_label_data_carrer}>10</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Clean Sheet</Text>
              <Text style={styles.profile_label_data_carrer}>10</Text>
            </View>

            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Free Kick Goal</Text>
              <Text style={styles.profile_label_data_carrer}>10</Text>
            </View>
            <View style={styles.data_holder}>
              <Text style={styles.profile_label}>Penalty Goal</Text>
              <Text style={styles.profile_label_data_carrer}>10</Text>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: "#ffffff",
                padding: 8,
                width: 80,
                borderRadius: 6,
                alignSelf: "center",
                marginTop: 4,
              }}
            >
              <Text style={{ color: "#8e8ad5", marginRight: 4 }}>Share</Text>
              <MaterialIcon name="share" color="#8e8ad5" size={20} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </BottomSheet> */}
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
    borderRadius: 10,
    // ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(46, 51, 41, 0.8)",

    // backgroundColor: "#8e8ad5",
  },
  data_holder: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    paddingTop: 8,
  },

  profile_label: {
    fontWeight: "700",
    color: "#cac9cd",
    marginTop: 6,
    width: "35%",
  },
  profile_label_data: {
    padding: 3,
    fontWeight: "600",
    color: "#000",
  },
  contanerImg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(146, 142, 218, 0.6)",
    flex: 1,
    height: "100%",
    marginTop: -80,
  },
  profile_label_data_carrer: {
    padding: 3,
    color: "#ffffff",
    fontWeight: "bold",
  },
  container_top: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    padding: 4,
  },
  data_holder_carrer: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "center",
  },
  profile_label_carrer: {
    fontWeight: "700",
    color: "#ffffff",
    marginTop: 6,
    width: "35%",
  },
});
