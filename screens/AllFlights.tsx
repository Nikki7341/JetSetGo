/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import commonStyles from "../styles/commonCss";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../utils/store";
import { fetchData } from "../utils/reduxToolkit";
import { palette } from "../styles/palette";
import Icon from 'react-native-vector-icons/MaterialIcons'

const AllFlights = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.data.items);
  const status = useSelector((state: RootState) => state.data.status);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log({ data, status });
  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headingText}>Let's</Text>
          <Text style={styles.expolreText}>Explore</Text>
        </View>
        <View>
        <Icon name="search" size={30} color="#4F8EF7" />
        </View>
      </View>
      <ScrollView style={styles.scrollView}></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
