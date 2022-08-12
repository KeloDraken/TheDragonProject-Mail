import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

function GoogleLogin(): JSX.Element {
  function login() {
    // window.location.replace("http://localhost:8000/auth/google/login/");
    console.log("Logging you in")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Continue with Google *</Text>
      </TouchableOpacity>
      <Text allowFontScaling={false} style={styles.footnote}>
        * 7-day free trial, no credit card required
      </Text>
    </View>
  );
} 

export default GoogleLogin;
