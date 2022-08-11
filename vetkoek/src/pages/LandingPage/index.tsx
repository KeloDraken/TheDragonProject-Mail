import axios from "axios";
import { useCookies } from "react-cookie";
import { GoogleLogin } from "@react-oauth/google";
import { SafeAreaView, Text, View } from "react-native";
import { baseURL } from "../../libs";
import { google } from "../../libs/oauth";
import { styles } from "./styles";
import { DescriptionComponent, LogoComponent } from "../../components";

export default function LandingPage() {
  const [, setCookie] = useCookies();

  function setItem(name: string, value: string): void {
    setCookie(name, value, {
      expires: google.getExpiryDate(),
    });
  }

  function handleLogin(response: any): void {
    axios
      .post(`${baseURL}/auth/convert-token`, {
        token: response.accessToken,
        backend: "google-oauth2",
        grant_type: "convert_token",
        client_id: google.getClientID(),
        client_secret: google.getClientSecret(),
      })
      .then((res) => {
        const { access_token, refresh_token } = res.data;
        console.log({ access_token, refresh_token });
        setItem("access_token", access_token);
        setItem("refresh_token", refresh_token);
      })
      .catch((err) => {
        console.log("Error Google login", err);
      });
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.columnLeft}>
          <LogoComponent />
          <Text allowFontScaling={false} style={styles.mailEmoji}>
            @
          </Text>
        </View>
        <View style={styles.columnRight}>
          <DescriptionComponent />
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleLogin(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
