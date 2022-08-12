import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    paddingVertical: hp("2.7"),
    paddingHorizontal: wp("2.5"),
    backgroundColor: "#060607",
    borderRadius: wp("3"),
    shadowColor: "#3f3f3f",
    shadowOffset: { width: wp("1"), height: wp("1") },
    shadowOpacity: 0.8,
    shadowRadius: wp("2.5"),
    elevation: 10,
  },
  buttonText: {
    fontFamily: "Lora",
    fontSize: wp("1.6"),
    fontWeight: "700",
    margin: "auto",
    color: "#ffffff",
  },
  footnote: {
    color: "#595959",
    marginTop: hp("16"),
    flexDirection: "column",
    alignSelf: "center",
    fontFamily: "Lora",
    fontSize: wp("1.4"),
  },
});
