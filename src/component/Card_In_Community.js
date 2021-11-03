import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Card_In_Community({ img, title, subtitle }) {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.img_style} resizeMode="cover" />
      <Text style={{ fontWeight: "bold", color: "#000", marginTop: 10 }}>{title}</Text>
      <Text style={{ textAlign: "center", color: "#4589ba", marginTop: 8, paddingLeft: 6, paddingRight: 6 }}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    padding: 5,
    alignItems: "center",
    marginTop: 55,
  },
  img_style: {
    width: 150,
    height: 100,
    marginTop: -30,
    borderRadius: 6,
  },
});
