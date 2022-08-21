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
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formContainer: {
    marginTop: heightPercentageToDP("5"),
  },
  formInput: {
    color: "#000000",
    fontFamily: "Lora",
    fontSize: widthPercentageToDP("2"),
    fontWeight: "600",
    borderColor: "#000000",
    borderWidth: widthPercentageToDP("0.3"),
    borderRadius: widthPercentageToDP("0.3"),
    marginVertical: heightPercentageToDP("1"),
    paddingHorizontal: widthPercentageToDP("1"),
    paddingVertical: heightPercentageToDP("2"),
  },
  button: {
    backgroundColor: "#000000",
    marginVertical: heightPercentageToDP("1"),
    paddingHorizontal: widthPercentageToDP("1"),
    paddingVertical: heightPercentageToDP("2"),
    borderWidth: widthPercentageToDP("0.3"),
    borderRadius: widthPercentageToDP("0.3"),
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Lora",
    fontSize: widthPercentageToDP("2"),
    fontWeight: "600",
  },
});
