import { View } from "react-native";
import { Logo, Text } from "../../components";
import { styles } from "./styles";

function Landing(): JSX.Element {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
export default Landing;
