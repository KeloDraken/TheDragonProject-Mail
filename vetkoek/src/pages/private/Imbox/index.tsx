import { View } from "react-native";
import { Logo, Navbar, Text } from "../../../components";
import { styles } from "./styles";

function Imbox(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Logo />
        <Navbar />
      </View>
      <View style={styles.description}>
        <Text size="medium">New for you</Text>
        <Text>There's nothing for you</Text>
      </View>
      <View style={styles.description}>
        <Text size="medium">Previously seen emails</Text>
        <Text>There's nothing for you</Text>
      </View>
    </View>
  );
}
export default Imbox;
