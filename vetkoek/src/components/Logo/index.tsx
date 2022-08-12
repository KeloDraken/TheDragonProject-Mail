import { Text, View } from "react-native";
import { styles } from "./styles";

interface LogoProps {
  dark?: boolean;
  light?: boolean;
}

function Logo({ light }: LogoProps): JSX.Element {
  let logoColour = null;
  if (light) logoColour = styles.logoLight;
  else logoColour = styles.logoDark;

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={[styles.logo, logoColour]}>
        kelodraken
      </Text>
      <Text allowFontScaling={false} style={[styles.mail, logoColour]}>
        Mail
      </Text>
    </View>
  );
}

export default Logo;
