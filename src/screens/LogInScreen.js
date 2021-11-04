import React from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import MeterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
// auraapp ------loginscreen
export default function LogInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ height: "45%", backgroundColor: "#ffffff" }}>
        <View style={{ left: 60, width: "100%", height: "80%", marginBottom: 10 }}>
          <Image
            source={require("../assets/login_img.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.overlay}>
          <View style={{ justifyContent: "center", width: "100%", height: "100%", marginLeft: 25 }}>
            <Text style={{ justifyContent: "center", color: "#f7d85c", fontSize: 24 }}>
              Welcome To <Text style={{ fontWeight: "bold", fontSize: 24 }}>SETES,</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={{ height: "55 %", backgroundColor: "#e9f5f5", alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            width: "90%",
            height: 180,
            backgroundColor: "#ffffff",
            marginTop: -80,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}
        >
          <Text style={{ color: "#1366aa", fontWeight: "bold", padding: 20 }}>LOGIN</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#d1d1d1",
              width: "90%",
              borderRadius: 20,
              padding: 4,
            }}
          >
            <View style={{ flexDirection: "row", padding: 4, alignItems: "center" }}>
              <MeterialIcon name="phone" size={20} color="#6f7173" />
              <TextInput
                style={{ paddingLeft: 10, textAlign: "center" }}
                placeholder="Enter Your Number"
                placeholderTextColor="#d8dde3"
              />
            </View>
          </View>
          <Text style={{ marginTop: 10, textAlign: "center", color: "#d1d1d1", fontSize: 12 }}>
            A 4 digit otp will send via SMS to verify~{"\n"} your number!
          </Text>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              marginTop: -10,
            }}
            onPress={() => navigation.navigate("CommunityScreen")}
          >
            {/* <TouchableOpacity onPress={()=>alert('ks')} style={{}}>
          </TouchableOpacity> */}

            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1.0 }}
              colors={["#1366aa", "#e6e8eb"]}
              style={{ width: 60, height: 60, borderRadius: 30, justifyContent: "center", alignItems: "center" }}
            >
              <MeterialIcon name="arrow-right" size={26} color="#ffffff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", width: "100%", height: "100%" }}>
          <Text style={{ alignSelf: "center", color: "#55a4ca", fontSize: 20, fontWeight: "bold" }}>
            "Follow Your Passion"
          </Text>
          <View style={{ marginTop: 70 }}>
            <Text style={{ padding: 20, fontSize: 12, color: "#b4b4b4", bottom: 0, textAlign: "center" }}>
              By clicking the buttons you are accepting the
              <Text style={{ fontSize: 12, color: "#55a4ca" }}>Terms & Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(19, 105, 170, 0.7)",
  },
});
