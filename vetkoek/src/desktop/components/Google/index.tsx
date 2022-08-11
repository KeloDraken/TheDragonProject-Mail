import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useCookies } from "react-cookie";
import { View, TouchableOpacity, Text } from "react-native";
import { baseURL } from "../../../libs";
import { google } from "../../../libs/oauth";
import { styles } from "./styles";

function GoogleLogin(): JSX.Element {
  const [, setCookie] = useCookies();

  function handleLogin(response: any): void {
    axios
      .post(`${baseURL}/auth/convert-token`, {
        headers: { Authorization: "Bearer AZc7QuMk1rZUFqDl3Vsjzcy5MNnmPK" },
        token: response.code,
        backend: "google-oauth2",
        grant_type: "convert_token",
        client_id: google.getClientID(),
        client_secret: google.getClientSecret(),
      })
      .then((res) => {
        const { access_token, refresh_token } = res.data;
        setItem("access_token", access_token);
        setItem("refresh_token", refresh_token);
      })
      .catch((err) => {
        console.log("Error Google login", err);
      });
  }

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleLogin(codeResponse),
    flow: "auth-code",
  });

  function setItem(name: string, value: string): void {
    setCookie(name, value, {
      expires: google.getExpiryDate(),
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Begin 21 day free trial *</Text>
      </TouchableOpacity>
      <Text allowFontScaling={false} style={styles.footnote}>* no credit card required</Text>
    </View>
  );
}

export default GoogleLogin;
