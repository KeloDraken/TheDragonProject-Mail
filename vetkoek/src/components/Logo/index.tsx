import { View } from "react-native";
import { styles } from "./styles";
import { Text } from "../../components";

function _Logo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.company}>kelodraken</Text>
      <Text style={styles.product}>Mail</Text>
    </View>
  );
}
export default _Logo;
