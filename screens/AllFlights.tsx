/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import commonStyles from "../styles/commonCss";
import { palette } from "../styles/palette";
import Icon from "react-native-vector-icons/MaterialIcons";
import Card from "../src/common/layout/Cards";

const AllFlights = () => {
  //data.result
  const [flightData, setFlightData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://api.npoint.io/4829d4ab0e96bfab50e7");
    const data = await response.json();
    setFlightData(data.data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        <View style={styles.topView}>
          <Text style={styles.headingText}>Let's</Text>
          <Text style={styles.expolreText}>Explore</Text>
        </View>
        <View style={styles.searchVeiw}>
          <Icon name="search" size={40} color={palette.secondary} />
        </View>
      </View>
      <FlatList
        data={flightData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />
      <TouchableOpacity style={commonStyles.buttonContainer}>
        <Text style={commonStyles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    // display:'flex',
    // flexDirection:"row",
    // justifyContent:"space-between"
  },
  searchVeiw: {
    backgroundColor: palette.white,
    borderRadius: 50,
    padding: 5,
    marginVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
    elevation: 8,
  },
  expolreText: {
    color: palette.secondary,
    fontSize: 35,
    fontWeight: "600",
    letterSpacing: 1,
    lineHeight: 50,
  },
  headingText: {
    color: palette.secondary,
    fontSize: 26,
    fontWeight: "600",
    letterSpacing: 1,
    lineHeight: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Replace with your background color
  },
  header: {
    alignItems: "flex-start",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginTop: -30, // Overlap with the header
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tripTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  formContainer: {
    // Style for form inputs
  },
  searchButton: {
    backgroundColor: "#FF6E40", // Replace with your button color
    padding: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  // Additional styles for inputs, icons, and other UI elements
});

export default AllFlights;
