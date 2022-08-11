import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import {
  DescriptionComponent,
  GoogleLoginButton,
  LogoComponent,
} from "../../components";

export default function LandingPage(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.columnLeft}>
          <LogoComponent />
          <Text allowFontScaling={false} style={styles.mailEmoji}>
            @
          </Text>
        </View>
        <View style={styles.columnRight}>
          <DescriptionComponent />
          <GoogleLoginButton />
        </View>
      </View>
    </SafeAreaView>
  );
}
