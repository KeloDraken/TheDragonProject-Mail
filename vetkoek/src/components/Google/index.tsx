import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

function GoogleLogin(): JSX.Element {
  function login() {
    window.location.replace("http://localhost:8000/auth/google/login/");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Begin 21 day free trial *</Text>
      </TouchableOpacity>
      <Text allowFontScaling={false} style={styles.footnote}>
        * no credit card required
      </Text>
    </View>
  );
}

export default GoogleLogin;
