import { view } from "@risingstack/react-easy-state";
import { useCookies } from "react-cookie";
import { View } from "react-native";
import { Link } from "react-router-dom";
import { Text } from "../";
import { styles } from "./styles";

interface NavbarProps {
  isLoginPage?: boolean;
}

const LoggedIn = (props: NavbarProps): JSX.Element => {
  return (
    <View style={styles.navbarLinkContainer}>
      <View style={styles.navbar}>
        <Text style={styles.navbarLink}>
          <Link to="/">Imbox</Link>
        </Text>
        <Text style={styles.navbarLink}>
          <Link to="/">The feed</Link>
        </Text>
        <Text style={styles.navbarLink}>
          <Link to="/">Paper trail</Link>
        </Text>
      </View>
      <Text style={[styles.navbarLink, styles.accountLink]}>More</Text>
    </View>
  );
};
const LoggedOut = (props: NavbarProps): JSX.Element => {
  const renderButton = (): JSX.Element => {
    if (props.isLoginPage) {
      return (
        <Link to="/">
          <View style={styles.navbarButton}>
            <Text style={styles.navbarButtonText}>Sign up</Text>
          </View>
        </Link>
      );
    }
    return (
      <Link to="/accounts/login">
        <View style={styles.navbarButton}>
          <Text style={styles.navbarButtonText}>Sign in</Text>
        </View>
      </Link>
    );
  };

  return (
    <View style={styles.navbarLinkContainer}>
      <Text style={styles.navbarLink}>About</Text>

      <Text style={styles.navbarLink}>
        <Link to="/pricing">Pricing</Link>
      </Text>

      {renderButton()}
    </View>
  );
};

const _Navbar = view((props: NavbarProps): JSX.Element => {
  const [cookies] = useCookies(["ISAUTH"]);

  const Nav = (): JSX.Element => {
    if (
      cookies.ISAUTH !== null &&
      cookies.ISAUTH !== undefined &&
      cookies.ISAUTH === "true"
    ) {
      return <LoggedIn />;
    }
    return <LoggedOut />;
  };

  return <Nav />;
});

export default _Navbar;
