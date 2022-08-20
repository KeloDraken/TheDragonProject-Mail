import { view } from "@risingstack/react-easy-state";
import { useEffect } from "react";
import { View } from "react-native";
import { AuthForm, Marquee, Text } from "../../../components";
import { userAuth } from "../../../store";
import { Page } from "../../Page";
import { styles } from "./styles";

class _Login extends Page {
  public PageContent(): JSX.Element {
    return (
      <View>
        <View style={styles.description}>
          <Text size="large">Welcome back!!!</Text>
          <Text size="small">
            Our fresh approach transforms email into something you want to use,
            not something you're forced to deal with.
          </Text>
        </View>
        <View>
          <AuthForm isLogin={true} />
        </View>
        <Marquee />
      </View>
    );
  }
}

const Login = view((): JSX.Element => {
  useEffect((): void => {
    if (userAuth.isLoggedIn) {
      window.location.replace("/");
    }
  }, []);

  return new _Login().render();
});
export default Login;
