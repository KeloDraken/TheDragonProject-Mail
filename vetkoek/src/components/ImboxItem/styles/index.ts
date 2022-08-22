import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  containerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: heightPercentageToDP("2"),
  },
  profilePic: {
    width: widthPercentageToDP("6"),
    height: widthPercentageToDP("6"),
    borderRadius: widthPercentageToDP("0.8"),
  },
  itemInfoContainer: {
    marginHorizontal: widthPercentageToDP("1.5"),
    flexDirection: "column",
  },
  itemFromUserEmail: {
    marginBottom: heightPercentageToDP("0.7"),
    color: "#939393",
    fontSize: widthPercentageToDP("1"),
  },
  timeReceived: {
    color: "#939393",
    fontSize: widthPercentageToDP("1"),
    marginTop: widthPercentageToDP("1"),
    fontWeight: "500"
  },
  metaData:{
    flexDirection: "row",
  },
  icon:{
    marginLeft: widthPercentageToDP("1"),
  },
  pipe:{
    marginLeft: widthPercentageToDP("1")
  }
});
