import { View } from "react-native";
import { AuthForm, Logo, Marquee, Text } from "../../components";
import { styles } from "./styles";

function Landing(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Logo />
      </View>
      <View style={styles.description}>
        <Text size="large">Email done right</Text>
        <Text size="medium">
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
