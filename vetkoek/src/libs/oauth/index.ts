abstract class OAuth {
  private drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
  private drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;

  public getClientID() {
    return this.drfClientId;
  }

  public getClientSecret() {
    return this.drfClientSecret;
  }

  public getExpiryDate(): Date {
    const expiryDate: Date = new Date();
    expiryDate.setMonth(expiryDate.getMonth() - 3);
    return expiryDate;
  }
}

export class GoogleOAuth extends OAuth {}

export const google = new GoogleOAuth();
