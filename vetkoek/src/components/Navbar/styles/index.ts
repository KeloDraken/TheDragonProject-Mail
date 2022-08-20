import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  navbarLinkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navbar: {
    flexDirection: "row",
  },
  accountLink: {
    marginLeft: widthPercentageToDP("34")
  },
  navbarLink: {
    marginLeft: widthPercentageToDP("2"),
    marginTop: heightPercentageToDP("1"),
  },
  navbarButton: {
    marginLeft: widthPercentageToDP("1"),
    paddingHorizontal: widthPercentageToDP("2"),
    paddingVertical: heightPercentageToDP("1"),
    backgroundColor: "#000000",
    borderRadius: widthPercentageToDP("0.3"),
  },
  navbarButtonText: {
    color: "#ffffff",
  },
});
