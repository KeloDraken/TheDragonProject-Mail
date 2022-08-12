import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    marginTop: hp("5"),
  },
  description: {
    display: "flex",
    color: "#060607",
    flexDirection: "column",
    alignSelf: "center",
    fontSize: wp("2.6"),
    fontFamily: "Lora",
    fontWeight: "600",
    marginBottom: hp("1"),
  },
  info: {
    display: "flex",
    color: "#060607",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: hp("3.5"),
    fontSize: wp("1.8"),
    fontFamily: "Lora",
    fontWeight: "500",
  },
});
