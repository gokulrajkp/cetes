import React, { cloneElement, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Cehck() {
  const [index, setIndex] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => setIndex(1)}
          style={{
            width: 300,
            height: 200,
            backgroundColor: "#90EE90",

            zIndex: index,
            marginTop: 200,
            marginLeft: 20,
            elevation: index,
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                transform: [{ rotate: "90deg" }],
                marginTop: 70,
                right: 38,
              }}
            >
              SETES BOOKING
            </Text>
            <Image
              source={require("../assets/img1.jpg")}
              style={{ width: 200, height: 100, left: -40, top: 10 }}
              resizeMode="stretch"
            />
          </View>
          <Text style={{ marginTop: 50, marginLeft: 10 }}>
            Join setes community to start your performance football carrer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIndex(0)}
          style={{
            width: 300,
            height: 200,
            backgroundColor: "#FF6347",
            marginTop: 160,
            marginLeft: 60,
            borderRadius: 10,
            position: "absolute",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
