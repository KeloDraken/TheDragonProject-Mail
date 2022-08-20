import { view } from "@risingstack/react-easy-state";
import { View } from "react-native";
import { Link } from "react-router-dom";
import { Text } from "../";
import { userAuth } from "../../store";
import { styles } from "./styles";

interface NavbarProps {
  isLoginPage?: boolean;
}

const LoggedIn = (props: NavbarProps): JSX.Element => {
  return (
    <View style={styles.navbarLinkContainer}>
      <View style={styles.navbar}>
        <Text style={styles.navbarLink}>Imbox</Text>
        <Text style={styles.navbarLink}>The feed</Text>
        <Text style={styles.navbarLink}>Paper trail</Text>
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
  const Nav = (): JSX.Element => {
    if (userAuth.isLoggedIn) {
      return <LoggedIn />;
    }
    return <LoggedOut />;
  };

  return <Nav />;
});

export default _Navbar;
