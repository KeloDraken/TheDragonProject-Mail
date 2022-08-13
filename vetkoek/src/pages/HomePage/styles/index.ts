import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    height: hp("100"),
  },
});
