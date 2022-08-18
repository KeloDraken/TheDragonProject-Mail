import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "../../components";
import { Authentication } from "../../lib/auth";
import { styles } from "./styles";

function _AuthForm(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth: Authentication = new Authentication(email, password);

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        allowFontScaling={false}
        placeholder="Please enter your Gmail address"
        keyboardType="email-address"
        style={styles.formInput}
        onChangeText={setEmail}
        returnKeyType="next"
      />
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        allowFontScaling={false}
        placeholder="Create a new password"
        style={styles.formInput}
        onChangeText={setPassword}
        returnKeyType="send"
      />
      <TouchableOpacity
        onPress={() => auth.userRegistration()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Try free for 14 days *</Text>
      </TouchableOpacity>
      <Text style={styles.footnote}>* No credit card required</Text>
    </View>
  );
}
export default _AuthForm;
