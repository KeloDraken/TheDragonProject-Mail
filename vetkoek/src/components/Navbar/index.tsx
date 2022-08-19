import { TouchableOpacity, View } from "react-native";
import { Text } from "../";
import { styles } from "./styles";

export default function _Navbar({ navigation }: any) {
  return (
    <View style={styles.navbarLinkContainer}>
      <Text style={styles.navbarLink}>About</Text>
      <Text style={styles.navbarLink}>Pricing</Text>
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.navbarButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
