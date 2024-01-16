/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { palette } from "./palette";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.background,
    padding:20
  },
  headingText:{
    color:palette.secondary,
    fontSize:26,
    fontWeight:"600",
    letterSpacing:1,
    lineHeight:50
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    paddingVertical:10,
    fontFamily:'Montserrat-Regular',
    textAlign:'center',
    letterSpacing:0.5
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    width: '100%', 
    backgroundColor:palette.secondary,
    borderRadius:20
  },
});

export default commonStyles;
