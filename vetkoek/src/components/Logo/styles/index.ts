import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  company: {
    fontFamily: "Lobster",
    fontWeight: "600",
    fontSize: widthPercentageToDP("2"),
  },
  product: {
    marginHorizontal: widthPercentageToDP("0.2"),
    marginVertical: heightPercentageToDP("0.1"),
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: widthPercentageToDP("2"),
  },
});
