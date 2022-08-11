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
        <LogoComponent />
        <View style={styles.hero}>
          <DescriptionComponent />
          <GoogleLoginButton />
        </View>
      </View>
    </SafeAreaView>
  );
}
