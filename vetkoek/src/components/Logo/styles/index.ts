import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    fontFamily: "Lobster",
    fontSize: wp("3"),
    fontWeight: "600",
  },
  mail: {
    fontFamily: "Roboto",
    fontSize: wp("2.9"),
    fontWeight: "600",
    marginLeft: hp("1"),
    marginTop: hp("0.5"),
  },
});
