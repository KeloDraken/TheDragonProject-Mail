import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: wp("0.7"),
    borderTopRightRadius: wp("0.7"),
    height: hp("100"),
    shadowColor: "#000000",
    shadowOffset: { width: wp("1"), height: wp("1") },
    shadowOpacity: 0.6,
    shadowRadius: wp("2.5"),
  },
  logoContainer: {
    paddingLeft: wp("1"),
    paddingRight: wp("2"),
  },
});
