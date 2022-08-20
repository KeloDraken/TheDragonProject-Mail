import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  description: {
    marginVertical: heightPercentageToDP("5"),
    marginRight: widthPercentageToDP("3"),
  },
});
