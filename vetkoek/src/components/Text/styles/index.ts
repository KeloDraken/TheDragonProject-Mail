import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  text: {
    fontFamily: "Lora",
    fontSize: widthPercentageToDP("1.5"),
    fontWeight: "600",
    color: "#000000",
  },
  textLarge: {
    fontSize: widthPercentageToDP("5")
  },
  textMedium: {
    fontSize: widthPercentageToDP("3")
  },
  textSmall: {
    fontSize: widthPercentageToDP("2")
  }
});
