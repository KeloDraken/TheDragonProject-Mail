import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5"),
    paddingVertical: hp("7"),
    width: wp("100"),
    height: hp("80"),
    backgroundColor: "#F1F1F1",
  },
  bar: {
    width: wp("100"),
    height: hp("10"),
    backgroundColor: "#000000",
  },
  hero: {
    marginHorizontal: wp("20"),
  },
});
