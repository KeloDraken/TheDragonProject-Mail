import { view } from "@risingstack/react-easy-state";
import { useEffect } from "react";
import { View } from "react-native";
import { AuthForm, Logo, Marquee, Navbar, Text } from "../../../components";
import { userAuth } from "../../../store";
import { styles } from "./styles";

const Login = view((): JSX.Element => {
  useEffect((): void => {
    if (userAuth.isLoggedIn) {
      window.location.replace("/");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Logo />
        <Navbar isLoginPage />
      </View>
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
});
export default Login;
