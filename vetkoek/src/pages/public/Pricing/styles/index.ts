import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    margin: widthPercentageToDP("2"),
    height: heightPercentageToDP("95"),
    width: widthPercentageToDP("95"),
  },
  text: {
    fontWeight: "900",
  },
  description: {
    marginVertical: heightPercentageToDP("5"),
    marginRight: widthPercentageToDP("3"),
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
