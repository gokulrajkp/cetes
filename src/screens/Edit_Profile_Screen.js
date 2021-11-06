import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-date-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              textAlign: "center",
              color: "#87b1e8",
              padding: 4,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Bio
          </Text>
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
        <Text style={{ textAlign: "center", padding: 4 }}>Ronaldo</Text>
        <View>
          {/* <Profile_field /> */}
          {/* <ScrollView> */}

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
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Email :</Text>
            <TextInput style={styles.profile_data} placeholder="Email">
              ronaldo@gmail.com
            </TextInput>
          </View>
          <View style={styles.credintials}>
            <Text style={styles.profile_data_holder}>Phone :</Text>
            <TextInput style={styles.profile_data} placeholder="Phone number">
              9923343423
            </TextInput>
          </View>
          <Text style={styles.label}>Gender</Text>
          <Picker selectedValue={gender} onValueChange={(itemValue, itemIndex) => setgender(itemValue)}>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
          <View style={{}}>
            <Text style={styles.label}>Date of Birth :</Text>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: "#c5c5c5",
                marginRight: 10,
                borderRadius: 3,
                padding: 4,
                marginTop: 4,
                marginBottom: 4,
                alignItems: "center",
              }}
              onPress={() => setOpen(true)}
            >
              <Text style={{}}>{current_date}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Blood Group</Text>
          <Picker selectedValue={bloodgrp} onValueChange={(itemValue, itemIndex) => setbloodgrp(itemValue)}>
            <Picker.Item label="A+" value="B+" />
            <Picker.Item label="A-" value="B-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
          </Picker>
          <Text style={styles.label}>District</Text>
          <Picker selectedValue={district} onValueChange={(itemValue, itemIndex) => setDistrict(itemValue)}>
            <Picker.Item label="Malapuram" value="Malapuram" />
            <Picker.Item label="Kozhikode" value="Kozhikode" />
          </Picker>
          <Text style={styles.label}>Zone</Text>
          <Picker selectedValue={zone} onValueChange={(itemValue, itemIndex) => setZone(itemValue)}>
            <Picker.Item label="Malapuram" value="Malapuram" />
            <Picker.Item label="Kozhikode" value="Kozhikode" />
          </Picker>
          <Text style={styles.label}>Home Ground</Text>
          <Picker selectedValue={homegrnd} onValueChange={(itemValue, itemIndex) => setHomeGrnd(itemValue)}>
            <Picker.Item label="Malapuram" value="Malapuram" />
            <Picker.Item label="Kozhikode" value="Kozhikode" />
          </Picker>
          <Text style={styles.label}>Favourite Position</Text>
          <Picker selectedValue={favPosition} onValueChange={(itemValue, itemIndex) => setFavPosition(itemValue)}>
            <Picker.Item label="stricker" value="stricker" />
            <Picker.Item label="Defensive " value="Defensive " />
            <Picker.Item label="Linebackers " value="Linebackers " />
            <Picker.Item label="Kicking specialists " value="Kicking specialists " />
          </Picker>
          <Text style={styles.label}>See Favourite Position</Text>
          <Picker selectedValue={see_fav_pstn} onValueChange={(itemValue, itemIndex) => setSee_fav_Pstn(itemValue)}>
            <Picker.Item label="stricker" value="stricker" />
            <Picker.Item label="Defensive " value="Defensive " />
            <Picker.Item label="Linebackers " value="Linebackers " />
            <Picker.Item label="Kicking specialists " value="Kicking specialists " />
          </Picker>
          <Text style={styles.label}>Strong Foot</Text>
          <Picker selectedValue={strongFoot} onValueChange={(itemValue, itemIndex) => setStrongFoot(itemValue)}>
            <Picker.Item label="left" value="left" />
            <Picker.Item label="right " value="right " />
          </Picker>
          <Text style={styles.label}>Boot Size</Text>
          <Picker selectedValue={bootSize} onValueChange={(itemValue, itemIndex) => setBootSize(itemValue)}>
            <Picker.Item label="left" value="left" />
            <Picker.Item label="right " value="right " />
          </Picker>
          <Text style={styles.label}>T-Shirt Size</Text>
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
  label: {
    paddingLeft: 10,
  },
});
