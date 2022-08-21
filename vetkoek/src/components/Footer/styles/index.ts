import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  footer: {
    width: widthPercentageToDP("98.5"),
    height: heightPercentageToDP("20"),
    backgroundColor: "#000000",
  },
});
