import axios from "axios";
import PasswordValidator from "password-validator";
import { commonPasswords } from "./common-passwords";

export function redirectIfAuthenticated(href: string): void {
  window.location.href = href;
}

export class Authentication {
  private email: string;
  private password: string;
  private isLogin: boolean;
  private setToken: Function;

  constructor(
    email: string,
    password: string,
    isLogin: boolean,
    setToken: Function
  ) {
    this.email = email;
    this.password = password;
    this.isLogin = isLogin;
    this.setToken = setToken;
  }

  public handleAuthentication(): void {
    this.formValidationError();
    if (this.isLogin) {
      if (this.hasEmail()) this.sendRequest();
    } else {
      if (this.hasEmail() && this.hasPassword()) this.sendRequest();
    }
  }

  private formValidationError() {
    if (!this.hasEmail()) alert("Please enter your email address");

    if (!this.hasPassword()) {
      if (!this.isLogin) {
        alert(
          "Please make sure that your password is at least 8 characters long and has at least one uppercase, one lowercase, and one special character."
        );
      }
    }
  }

  private sendRequest(): void {
    const data = {
      username: this.email,
      password: this.password,
    };
    if (this.isLogin) this.login(data);
    else this.register(data);
  }

  private register(data: { username: string; password: string }): void {
    const endpoint: string = "http://127.0.0.1:8000/accounts/auth/register/";

    axios
      .post(endpoint, data)
      .then(async (response) => {
        this.setToken(response.data.token);
      })
      .catch((err) => console.log(err));
  }

  private login(data: { username: string; password: string }): void {
    const endpoint: string = "http://127.0.0.1:8000/accounts/auth/login/";

    axios
      .post(endpoint, data)
      .then(async (response) => {
        this.setToken(response.data.token);
      })
      .catch((err) => console.log(err));
  }

  private hasEmail(): boolean {
    if (this.email === undefined || this.email === null) return false;
    else if (this.email === "") return false;
    else if (!(this.email.length > 10)) return false;
    return true;
  }

  private validPassword(): boolean {
    const validator = new PasswordValidator();
    validator
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .uppercase(1)
      .has()
      .lowercase(1)
      .has()
      .not()
      .spaces()
      .has()
      .symbols(1)
      .has()
      .not()
      .oneOf(commonPasswords);

    const res = validator.validate(this.password);
    if (typeof res === "boolean") return res;
    return false;
  }

  private hasPassword(): boolean {
    if (this.password === undefined || this.password === null) return false;
    return this.validPassword();
  }
}
