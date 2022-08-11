import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useCookies } from "react-cookie";
import { TouchableOpacity } from "react-native";
import { baseURL } from "../../libs";
import { google } from "../../libs/oauth";

function GoogleLogin(): JSX.Element {
  const [, setCookie] = useCookies();

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
    <TouchableOpacity onPress={() => login()}>
      Sign in with Google 🚀{" "}
    </TouchableOpacity>
  );
}

export default GoogleLogin;
