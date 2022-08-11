import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export const styles = StyleSheet.create({
    container: {
        marginTop: hp("7"),
    },
    description: {
        fontSize: wp("3"),
        fontFamily: "Lora",
        fontWeight: "600"
    },
    info:{
        marginVertical: hp("3.5"),
        fontSize: wp("2.5"),
        fontFamily: "Lora",
        fontWeight: "500"
    }
})