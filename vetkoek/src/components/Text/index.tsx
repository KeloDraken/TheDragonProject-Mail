import { Text } from "react-native";
import { TextInterface } from "../interfaces";
import { styles } from "./styles";

function setTextSize(text: TextInterface) {
  let textSize;

  if (text.size === "large") textSize = styles.textLarge;
  else if (text.size === "medium") textSize = styles.textMedium;
  else if (text.size === "small") textSize = styles.textSmall;
  return textSize;
}

export default function _Text(text: TextInterface): JSX.Element {
  const textSize = setTextSize(text);

  return (
    <Text
      style={[styles.text, textSize, text.style]}
      allowFontScaling={false}
      selectable={false}
    >
      {text.children}
    </Text>
  );
}
