import {Platform} from 'react-native';
import {useCookies} from 'react-cookie';
import axios from 'axios';

export class GoogleOAuth {
  private static drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
  private static drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;
  private static baseURL = 'http://localhost:8000';

  private static getExpiryDate(): Date {
    const expiryDate: Date = new Date();
    expiryDate.setMonth(expiryDate.getMonth() - 3);
    return expiryDate;
  }

  private static setItem(name: string, value: string): void {
    if (Platform.OS !== 'web') return;

    const [, setCookie] = useCookies([name]);

    setCookie(name, value, {
      expires: GoogleOAuth.getExpiryDate(),
    });
  }

  public static handleLogin(response: any): void {
    axios
      .post(`${GoogleOAuth.baseURL}/auth/convert-token`, {
        token: response.accessToken,
        backend: 'google-oauth2',
        grant_type: 'convert_token',
        client_id: GoogleOAuth.drfClientId,
        client_secret: GoogleOAuth.drfClientSecret,
      })
      .then(res => {
        const {access_token, refresh_token} = res.data;
        console.log({access_token, refresh_token});
        GoogleOAuth.setItem('access_token', access_token);
        GoogleOAuth.setItem('refresh_token', refresh_token);
      })
      .catch(err => {
        console.log('Error Google login', err);
      });
  }
}
