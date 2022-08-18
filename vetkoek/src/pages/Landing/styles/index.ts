import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: heightPercentageToDP("100"),
    width: widthPercentageToDP("100"),
  },
});
