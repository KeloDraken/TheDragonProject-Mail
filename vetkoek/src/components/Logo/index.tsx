import { View, Text } from "react-native";
import { styles } from "./styles";

function _Logo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.company}>kelodraken</Text>
      <Text style={styles.product}>Mail</Text>
    </View>
  );
}
export default _Logo;
