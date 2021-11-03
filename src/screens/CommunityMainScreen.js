import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import MeterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel from "react-native-snap-carousel";
import Card_In_Community from "../component/Card_In_Community";
import { ScrollView } from "react-native-gesture-handler";

export default function CommunityMainScreen() {
  const data = [
    {
      id: 1,
      img1: require("../assets/banner1.jpg"),
      card_img: require("../assets/booking_img.png"),
      title: "Booking",
      subtitle: "Book a slot for your football career",
    },
    {
      id: 2,
      img1: require("../assets/banner1.jpg"),
      card_img: require("../assets/leader_board.jpg"),
      title: "LEADER BOARD",
      subtitle: "Be a champ!! show case yourself",
    },
    {
      id: 3,
      img1: require("../assets/banner1.jpg"),
      card_img: require("../assets/events_img1.jpg"),
      title: "EVENTS",
      subtitle: "Find out what's more you can earn",
    },
    {
      id: 4,
      img1: require("../assets/social_media_img.jpg"),
      card_img: require("../assets/social_media_img.jpg"),
      title: "SOCIAL MEADIA",
      subtitle: "Be a champ!! show case yourself",
    },
  ];

  const { width } = Dimensions.get("window");

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ marginRight: 8 }}>
        <Image
          source={require("../assets/banner1.jpg")}
          resizeMode="cover"
          style={{ height: 200, width: "100%", marginLeft: 4, borderRadius: 10 }}
        />
      </View>
    );
  };

  return (
    <ScrollView style={{}}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <MeterialIcon name="menu" color="#525151" size={25} style={{ alignSelf: "center" }} />
          <View style={{ marginLeft: 8, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>SETES</Text>
            <Text style={{ fontSize: 12, lineHeight: 10 }}>sports</Text>
          </View>
          <Text style={{ marginLeft: 6, marginTop: 6, alignSelf: "center" }}>COMMUNITY</Text>
        </View>

        <View>
          <Image
            source={require("../assets/profile_img.webp")}
            style={{ width: 50, height: 50, borderRadius: 25 }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={{ width: width, height: 200, marginTop: 5 }}>
        <Carousel data={[2]} renderItem={renderItem} itemWidth={width} sliderWidth={width} />
      </View>
      <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 10, alignItems: "center", marginBottom: 8 }}>
        <MeterialIcon name="alert-circle" size={26} color="#f5c440" />
        <Text
          style={{
            color: "#3f3f3f",
            marginLeft: 8,
            textAlign: "center",
          }}
        >
          If you are not a community member <Text style={{ color: "#fe382e" }}> REGISTER HERE!</Text>
        </Text>
      </View>
      {/* cards */}
      <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap", padding: 5 }}>
        {data.map((item, index) => (
          <Card_In_Community key={index} img={item.card_img} title={item.title} subtitle={item.subtitle} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    padding: 4,
  },
});
