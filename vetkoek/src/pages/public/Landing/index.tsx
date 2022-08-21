import { View } from "react-native";
import { AuthForm, Logo, Marquee, Navbar, Text } from "../../../components";
import { styles } from "./styles";

function Landing(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Logo />
        <Navbar />
      </View>
      <View style={styles.description}>
        <Text size="large">Email done right</Text>
        <Text size="small">
          Our fresh approach transforms email into something you want to use,
          not something you're forced to deal with.
        </Text>
      </View>
      <View>
        <AuthForm />
      </View>
      <Marquee />
    </View>
  );
}
export default Landing;
