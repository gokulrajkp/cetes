import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-date-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function Edit_Profile_Screen() {
  const [gender, setgender] = useState("");
  const [bloodgrp, setbloodgrp] = useState("");
  const [district, setDistrict] = useState("");
  const [zone, setZone] = useState("");
  const [homegrnd, setHomeGrnd] = useState("");
  const [favPosition, setFavPosition] = useState("");
  const [see_fav_pstn, setSee_fav_Pstn] = useState("");
  const [strongFoot, setStrongFoot] = useState("");
  const [bootSize, setBootSize] = useState("");
  const [tshirtSize, setTshirtSize] = useState("");

  const { width, height } = Dimensions.get("screen");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  let selected_date = date.toString().split(" ");
  let current_date = selected_date[2] + " " + selected_date[1] + " " + selected_date[3];

  console.log(date.toString().split(" "));
  console.log(selected_date[2] + " " + selected_date[1] + " " + selected_date[3]);
  return (
    <View>
      <ScrollView style={{}}>
        <View style={{ backgroundColor: "#0c1b32", padding: 10 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "stretch" }}>
            <View>
              <AntIcon name="arrowleft" size={20} color="#ffffff" />
            </View>
            <View>
              <Text style={{ color: "#ffffff", fontWeight: "600" }}>Edit Profile</Text>
            </View>
            <View>
              <Text style={{ color: "#ffffff", textAlign: "right" }}>SAVE</Text>
            </View>
          </View>
          <View style={{ width: "100%", justifyContent: "center", alignItems: "center", padding: 20 }}>
            <ImageBackground
              source={require("../assets/profile_img.webp")}
              imageStyle={{ width: 100, height: 100, borderRadius: 50 }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#df3929",
                  alignSelf: "flex-end",
                  marginTop: 30,
                  marginLeft: 30,
                  justifyContent: "center",
                }}
              >
                <FeatherIcon style={{ alignSelf: "center" }} name="camera" size={16} color="#ffffff" />
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={{ paddingLeft: 12, paddingRight: 12 }}>
          {/* <Profile_field /> */}
          {/* <ScrollView> */}

          <View style={{ width: "100%", marginTop: 16 }}>
            <Text style={styles.profile_label}>Email</Text>
            <TextInput style={styles.profile_label_data}>ronaldo@gmail.com</TextInput>
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

          <View style={{ width: "100%" }}>
            <Text style={styles.profile_label}>Phone</Text>
            <TextInput style={styles.profile_label_data}>9923343423</TextInput>
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

          <Text style={styles.profile_label}>Gender</Text>
          <Picker selectedValue={gender} onValueChange={(itemValue, itemIndex) => setgender(itemValue)}>
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
          </Picker>

          <View style={{}}>
            <Text style={styles.profile_label}>Date of Birth :</Text>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <TouchableOpacity
              style={{
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 3,
                padding: 4,
                marginTop: 4,
                marginBottom: 4,
              }}
              onPress={() => setOpen(true)}
            >
              <Text style={{}}>{current_date}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.profile_label}>Blood Group</Text>
          <Picker selectedValue={bloodgrp} onValueChange={(itemValue, itemIndex) => setbloodgrp(itemValue)}>
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
          </Picker>
          <Text style={styles.profile_label}>District</Text>
          <Picker selectedValue={district} onValueChange={(itemValue, itemIndex) => setDistrict(itemValue)}>
            <Picker.Item label="Malapuram" value="Malapuram" />
            <Picker.Item label="Kozhikode" value="Kozhikode" />
          </Picker>
          <Text style={styles.profile_label}>Zone</Text>
          <Picker selectedValue={zone} onValueChange={(itemValue, itemIndex) => setZone(itemValue)}>
            <Picker.Item label="Malapuram" value="Malapuram" />
            <Picker.Item label="Kozhikode" value="Kozhikode" />
          </Picker>
          <Text style={styles.profile_label}>Home Ground</Text>
          <Picker selectedValue={homegrnd} onValueChange={(itemValue, itemIndex) => setHomeGrnd(itemValue)}>
            <Picker.Item label="Malapuram" value="Malapuram" />
            <Picker.Item label="Kozhikode" value="Kozhikode" />
          </Picker>
          <Text style={styles.profile_label}>Favourite Position</Text>
          <Picker selectedValue={favPosition} onValueChange={(itemValue, itemIndex) => setFavPosition(itemValue)}>
            <Picker.Item label="stricker" value="stricker" />
            <Picker.Item label="Defensive " value="Defensive " />
            <Picker.Item label="Linebackers " value="Linebackers " />
            <Picker.Item label="Kicking specialists " value="Kicking specialists " />
          </Picker>
          <Text style={styles.profile_label}>See Favourite Position</Text>
          <Picker selectedValue={see_fav_pstn} onValueChange={(itemValue, itemIndex) => setSee_fav_Pstn(itemValue)}>
            <Picker.Item label="stricker" value="stricker" />
            <Picker.Item label="Defensive " value="Defensive " />
            <Picker.Item label="Linebackers " value="Linebackers " />
            <Picker.Item label="Kicking specialists " value="Kicking specialists " />
          </Picker>
          <Text style={styles.profile_label}>Strong Foot</Text>
          <Picker selectedValue={strongFoot} onValueChange={(itemValue, itemIndex) => setStrongFoot(itemValue)}>
            <Picker.Item label="left" value="left" />
            <Picker.Item label="right " value="right " />
          </Picker>
          <Text style={styles.profile_label}>Boot Size</Text>
          <Picker selectedValue={bootSize} onValueChange={(itemValue, itemIndex) => setBootSize(itemValue)}>
            <Picker.Item label="left" value="left" />
            <Picker.Item label="right " value="right " />
          </Picker>
          <Text style={styles.profile_label}>T-Shirt Size</Text>
          <Picker selectedValue={bootSize} onValueChange={(itemValue, itemIndex) => setBootSize(itemValue)}>
            <Picker.Item label="L" value="L" />
            <Picker.Item label="M " value="M " />
            <Picker.Item label="S " value="S " />
          </Picker>
          {/* </ScrollView> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  credintials: {
    flexDirection: "row",
    margin: 8,

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
  label: {},
  profile_label: {
    fontWeight: "700",
    color: "#cac9cd",
  },
  profile_label_data: {
    padding: 2,
    fontWeight: "700",
    color: "#000",
  },
});
