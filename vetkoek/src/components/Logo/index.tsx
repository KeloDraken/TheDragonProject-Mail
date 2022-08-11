import { Text, View } from "react-native";
import { styles } from "./styles";

function Logo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.logo}>
        kelodraken
      </Text>
      <Text allowFontScaling={false} style={styles.mail}>
        Mail
      </Text>
    </View>
  );
}

export default Logo;
