import { View } from "react-native";
import { Link } from "react-router-dom";
import { Text } from "../";
import { styles } from "./styles";

interface NavbarProps {
  isLoginPage?: boolean;
}

export default function _Navbar(props: NavbarProps) {
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
}
