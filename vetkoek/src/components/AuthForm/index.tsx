import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

function _AuthForm(): JSX.Element {
  return (
    <View>
      <TextInput
        autoFocus
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        allowFontScaling={false}
        placeholder="Email address"
        keyboardType="email-address"
        style={styles.formInput}
      />
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        allowFontScaling={false}
        placeholder="Password"
        style={styles.formInput}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue to Kelodraken</Text>
      </TouchableOpacity>
    </View>
  );
}
export default _AuthForm;
