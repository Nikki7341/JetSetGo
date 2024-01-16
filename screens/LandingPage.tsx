/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonCss";

const LandingPage = ({navigation}:{navigation: any}) => {
  return (
    <View style={commonStyles.container}>
      <Image
        source={require("../assets/images/logoNew.png")}
        style={styles.centerImage}
      />
      <View style={commonStyles.buttonContainer}>
        <TouchableOpacity
          style={commonStyles.buttonText}
          onPress={() => navigation.navigate("AllFlights")}
        >
          <Text style={commonStyles.buttonText}>Get Started </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 50,
  },
});

export default LandingPage;
