import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  marqueeText: {
    marginHorizontal: widthPercentageToDP("2"),
    color: "#6b6b6b",
  },
  imbox: {
    color: "#000000",
  },
});
