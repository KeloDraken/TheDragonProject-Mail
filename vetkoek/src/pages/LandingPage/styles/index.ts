import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5"),
    paddingVertical: hp("10"),
    width: wp("100"),
    height: hp("100"),
    backgroundColor: "#F1F1F1",
  },
  hero: {
    marginHorizontal: wp("20")
  },
});
