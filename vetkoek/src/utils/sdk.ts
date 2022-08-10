export class GoogleOAuth {
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
}
