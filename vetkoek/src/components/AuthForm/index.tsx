import { useState } from "react";
import { useCookies } from "react-cookie";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "../../components";
import { Authentication } from "../../lib/auth";
import { AuthenticationInterface } from "../interfaces";
import { styles } from "./styles";

function _AuthForm(props: AuthenticationInterface): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setCookie] = useCookies(["UIDT"]);

  const setUserToken = (token: string): void => {
    setCookie("UIDT", token, {
      path: "/",
      maxAge: 2628000,
    });
    window.location.reload();
  };

  let isLogin: boolean;
  if (props.isLogin === null || props.isLogin === undefined) {
    isLogin = false;
  } else {
    isLogin = true;
  }

  const auth: Authentication = new Authentication(
    email,
    password,
    isLogin,
    setUserToken
  );

  const handleAuth = (): void => {
    auth.handleAuthentication();
  };

  const renderInputs = (): JSX.Element => {
    let passwordPlaceholder;

    if (isLogin) {
      passwordPlaceholder = "Enter your password";
    } else {
      passwordPlaceholder = "Create a new password";
    }

    return (
      <View>
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
          placeholder={passwordPlaceholder}
          style={styles.formInput}
          onChangeText={setPassword}
          returnKeyType="send"
        />
      </View>
    );
  };

  let buttonText: string;

  if (isLogin) {
    buttonText = "Go to your Imbox";
  } else {
    buttonText = "Try free for 14 days *";
  }

  return (
    <View style={styles.container}>
      {renderInputs()}
      <TouchableOpacity onPress={() => handleAuth()} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      {!isLogin ? (
        <Text style={styles.footnote}>* No credit card required</Text>
      ) : null}
    </View>
  );
}
export default _AuthForm;
