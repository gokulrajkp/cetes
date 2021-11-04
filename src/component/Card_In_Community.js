import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Card_In_Community({ img, title, subtitle }) {
  return (
    <View
      style={{
        width: "50%",
        padding: 5,
        marginTop: 55,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,

        elevation: 19,
      }}
    >
      <View style={{ backgroundColor: "white", alignItems: "center", borderRadius: 6 }}>
        <Image source={img} style={styles.img_style} resizeMode="cover" />
        <Text style={{ fontWeight: "bold", color: "#000", marginTop: 10 }}>{title}</Text>
        <Text style={styles.card}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    textAlign: "center",
    color: "#4589ba",
    marginTop: 8,
    marginBottom: 28,
    paddingLeft: 6,
    paddingRight: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  img_style: {
    width: 150,
    height: 100,
    marginTop: -30,
    borderRadius: 6,
  },
});
