import axios from "axios";

interface Message {}

export class Email {
  private hasNext: boolean = false;
  private loading: boolean = true;
  private token: string;
  private messages: any;

  constructor(token: string) {
    this.token = token;
  }

  public getImbox(): any {
    const endpoint: string = `http://127.0.0.1:8000/mail/imbox/?page=1`;
    let postsList: any = [];

    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response): void => {
        if (response.data.next === null) this.hasNext = false;
        else this.hasNext = true;

        postsList = response.data.results;
        this.setMessages(postsList);
        this.loading = false;
      });

    console.log(this.messages);

    return postsList;
  }

  private setMessages(data: any): void{
    this.messages = data;
  }
}
