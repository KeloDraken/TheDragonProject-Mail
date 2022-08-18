import axios from "axios";

export class Authentication {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public userRegistration(): void {
    if (!this.hasEmail()) alert("Please enter your email address");
    if (!this.hasPassword()) alert("Please enter your password");

    if (this.hasEmail() && this.hasPassword()) {
      this.sendRequest();
    }
  }

  private sendRequest(): void {
    const data = {
      username: this.email,
      password: this.password,
    };
    const endpoint: string = "http://127.0.0.1:8000/accounts/auth/register/";
    axios
      .post(endpoint, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private hasEmail(): boolean {
    if (this.email === undefined || this.email === null) return false;
    else if (this.email === "") return false;
    else if (!(this.email.length > 10)) return false;
    return true;
  }

  private hasPassword(): boolean {
    if (this.password === undefined || this.password === null) return false;
    else if (this.password === "") return false;
    else if (!(this.password.length > 10)) return false;
    return true;
  }
}
