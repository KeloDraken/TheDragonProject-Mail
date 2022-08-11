import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: wp("2"),
  },
  button: {
    flex: 1 / 2,
    backgroundColor: "#000000",
    borderRadius: wp("3"),
    shadowColor: "#3f3f3f",
    shadowOffset: { width: wp("1"), height: wp("1") },
    shadowOpacity: 0.8,
    shadowRadius: wp("2.5"),
    elevation: 10,
  },
  buttonText: {
    fontFamily: "Lora",
    fontSize: wp("1.8"),
    fontWeight: "700",
    margin: "auto",
    color: "#ffffff",
  },
});
