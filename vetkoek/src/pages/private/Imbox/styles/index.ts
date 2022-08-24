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
    marginBottom: heightPercentageToDP("5"),
    marginLeft: widthPercentageToDP("5"),
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pageHeading: {
    marginTop: heightPercentageToDP("7"),
    flexDirection: "column",
    textAlign: "center",
  },
});
