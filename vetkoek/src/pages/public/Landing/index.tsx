import { View } from "react-native";
import { AuthForm, Marquee, Text } from "../../../components";
import { Page } from "../../Page";
import { styles } from "./styles";

class _Landing extends Page {
  public PageContent(): JSX.Element {
    return (
      <View>
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
}

function Landing(): JSX.Element {
  return new _Landing().render();
}
export default Landing;
