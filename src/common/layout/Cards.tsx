/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { palette } from "../../../styles/palette";

const Card = ({ item }: { item: any }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <View style={styles.upperHeadingView}>
          <Text style={styles.subtitle}>
            {item.displayData.airlines[0].airlineName}
          </Text>
          <Image
            source={require("../../../assets/images/plane.png")}
            style={styles.planeImage}
          />
        </View>
        <View style={styles.midView}>
          <View>
            <Text style={styles.cityCode}>
              {item.displayData.source.airport.cityCode}
            </Text>
            <Text style={styles.cityName}>
              {item.displayData.source.airport.cityName}
            </Text>
          </View>
          <Icon name="airplane-takeoff" size={40} color={palette.primary} />
          <View>
            <Text style={styles.cityCode}>
              {item.displayData.destination.airport.cityCode}
            </Text>
            <Text style={styles.cityName}>
              {item.displayData.destination.airport.cityName}
            </Text>
          </View>
        </View>
        <View style={styles.midView}>
          <View>
            <Text style={styles.dateTime}>
              Date
            </Text>
            <Text style={styles.cityName}>
              {new Date(item.displayData.destination.arrTime).getDate()}
            </Text>
          </View>
          <View>
            <Text style={styles.dateTime}>
              Time
            </Text>
            <Text style={styles.cityName}>
              {new Date(item.displayData.destination.arrTime).getTime()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  midView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTime: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
    color: palette.secondary,
  },
  cityCode: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: palette.secondary,
  },
  cityName: {
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0.5,
    color: palette.secondary,
  },
  upperHeadingView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  planeImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4, // for Android
    marginVertical: 10,
    marginHorizontal: 20,
    width: 300,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "grey",
  },
});

export default Card;
