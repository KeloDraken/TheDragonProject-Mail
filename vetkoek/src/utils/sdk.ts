import { Platform } from "react-native";
import { useCookies } from "react-cookie";
import axios from "axios";

class GoogleOAuth {
  private drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
  private drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;
  private baseURL = "http://localhost:8000";

  public getClientID() {
    return this.drfClientId;
  }

  public getClientSecret() {
    return this.drfClientSecret;
  }

  public getBaseURL() {
    return this.baseURL;
  }

  public getExpiryDate(): Date {
    const expiryDate: Date = new Date();
    expiryDate.setMonth(expiryDate.getMonth() - 3);
    return expiryDate;
  }

  public setItem(name: string, value: string): void {
    if (Platform.OS !== "web") return;

    const [, setCookie] = useCookies([name]);

    setCookie(name, value, {
      expires: this.getExpiryDate(),
    });
  }
}

export function handleLogin(response: any): void {
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
      google.setItem("access_token", access_token);
      google.setItem("refresh_token", refresh_token);
    })
    .catch((err) => {
      console.log("Error Google login", err);
    });
}
