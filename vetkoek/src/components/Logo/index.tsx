import { View } from "react-native";
import { styles } from "./styles";
import { Text } from "../../components";
import { Link } from "react-router-dom";

function _Logo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.company}>kelodraken</Text>
        <Text style={styles.product}>Mail</Text>
      </Link>
    </View>
  );
}
export default _Logo;
