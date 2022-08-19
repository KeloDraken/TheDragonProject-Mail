import axios from "axios";
import PasswordValidator from "password-validator";
import { commonPasswords } from "./common-passwords";

export class Authentication {
  private email: string;
  private password: string;
  private token: any;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public userRegistration(func: Function): void {
    if (!this.hasEmail()) alert("Please enter your email address");
    if (!this.hasPassword())
      alert(
        "Please make sure that your password is at least 8 characters long and has at least one uppercase, one lowercase, and one special character."
      );

    if (this.hasEmail() && this.hasPassword()) {
      this.sendRequest(func);
    }
  }

  public getToken(): string {
    return this.token;
  }

  private sendRequest(func: Function): void {
    const data = {
      username: this.email,
      password: this.password,
    };
    const endpoint: string = "http://127.0.0.1:8000/accounts/auth/register/";

    axios
      .post(endpoint, data)
      .then(async (response) => {
        func(response.data.token);
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
