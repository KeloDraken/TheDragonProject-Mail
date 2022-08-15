import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

function GoogleLogin(): JSX.Element {
  function login() {
    window.location.href = "http://localhost:8000/auth/google/login/";
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Continue with Google *</Text>
      </TouchableOpacity>
      <Text selectable={false} allowFontScaling={false} style={styles.footnote}>
        * 7-day free trial, no credit card required
      </Text>
    </View>
  );
}

export default GoogleLogin;
