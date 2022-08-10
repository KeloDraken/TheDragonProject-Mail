import axios from "axios";
import { useCookies } from "react-cookie";
import { GoogleLogin } from "react-google-login";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";
import { GoogleOAuth } from "./utils/sdk";

const googleClientId =
  "991569752579-gig8rttagf7jk8ihfdgst1p53kme3ah9.apps.googleusercontent.com";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const google = new GoogleOAuth();
  const [, setCookie] = useCookies();

  function setItem(name: string, value: string): void {
    if (Platform.OS !== "web") return;
    setCookie(name, value, {
      expires: google.getExpiryDate(),
    });
  }

  function handleLogin(response: any): void {
    const google = new GoogleOAuth();

    axios
      .post(`${google.getBaseURL()}/auth/convert-token`, {
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
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Text>Hello World</Text>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={handleLogin}
        onFailure={(err) => console.log("Google Login failed", err)}
        isSignedIn={true}
      />
    </SafeAreaView>
  );
};

export default App;
