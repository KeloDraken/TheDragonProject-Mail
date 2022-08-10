import axios from "axios";
import { useCookies } from "react-cookie";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";
import { baseURL } from "../libs";
import { google } from "../libs/oauth";

const googleClientId: string =
  "991569752579-gig8rttagf7jk8ihfdgst1p53kme3ah9.apps.googleusercontent.com";

export default function LandingPage() {
  const isDarkMode: boolean = useColorScheme() === "dark";
  const [, setCookie] = useCookies();

  function setItem(name: string, value: string): void {
    if (Platform.OS !== "web") return;
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
    <GoogleOAuthProvider clientId={googleClientId}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <Text>Hello World</Text>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            handleLogin(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </SafeAreaView>
    </GoogleOAuthProvider>
  );
}
