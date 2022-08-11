import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: wp("5"),
    paddingVertical: hp("10"),
    width: wp("100"),
    height: hp("100"),
    backgroundColor: "#F1F1F1",
  },
  columnLeft: {
    width: wp("47"),
  },
  columnRight: {
    flex: 1,
  },
  mailEmoji: {
    marginLeft: wp("5"),
    fontSize: wp("20"),
    textShadowColor: "#3f3f3f",
    textShadowOffset: { width: wp("1"), height:  wp("1") },
    textShadowRadius: wp("2.5"),
  },
});
