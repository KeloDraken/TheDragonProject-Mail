import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./styles";
import { Description, GoogleLoginButton, Logo } from "../../components";

export default function LandingPage(): JSX.Element {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <SafeAreaView>
      <View style={styles.bar} />
      <View style={styles.container}>
        <Logo />
        <View style={styles.hero}>
          <Description />
          <GoogleLoginButton />
        </View>
      </View>
      <View style={styles.bar}>
        <Text allowFontScaling={false} style={styles.copyright}>
          {"\u00A9"} {year} Samkelo Rocks (Pty) Ltd.
        </Text>
      </View>
    </SafeAreaView>
  );
}
