import { StyleProp, TextStyle } from "react-native";

export interface TextInterface {
  style?: StyleProp<TextStyle>;
  children: any;
  size?: "large" | "medium" | "small";
}
