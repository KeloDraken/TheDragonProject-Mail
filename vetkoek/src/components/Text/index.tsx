import { Text } from "react-native";
import { styles } from "./styles";

export default function _Text({ children }: any): JSX.Element {
  return (
    <Text style={styles.text} allowFontScaling={false} selectable={false}>
      {children}
    </Text>
  );
}
