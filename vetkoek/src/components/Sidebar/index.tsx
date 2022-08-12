import { View } from "react-native";
import { LogoComponent } from "..";
import { styles } from "./styles";

function Sidebar(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoComponent light />
      </View>
    </View>
  );
}

export default Sidebar;
