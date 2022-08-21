import { view } from "@risingstack/react-easy-state";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { View } from "react-native";
import { Logo, Navbar, Text } from "../../../components";
import { styles } from "./styles";

const ImboxPage = view((): JSX.Element => {
  const [messages, setMessages] = useState<Array<any>>([]);
  const [cookies] = useCookies(["IMPORTED", "UIDT"]);

  const getImbox = (): void => {
    const endpoint: string = `http://127.0.0.1:8000/mail/imbox/?page=1`;
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${cookies.UIDT}`,
          "Content-Type": "application/json",
        },
      })
      .then((response): void => {
        setMessages(response.data.results);
      });
  };

  useEffect((): void => {
    const token = cookies.IMPORTED;
    if (
      token === null ||
      token === undefined ||
      token === "false"
    ) {
      console.log("HERE");
      window.location.replace("/mail/import");
    }
    getImbox();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies.IMPORTED]);

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Logo />
        <Navbar />
      </View>
      <View style={styles.description}>
        <Text size="medium">New for you</Text>
        {messages.map((message, index) => {
          return (
            <View style={{ marginVertical: 10 }} key={index}>
              <Text style={{ color: "red" }}>{message.from_user.fullname}</Text>
              <Text key={index}>{message.subject}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.description}>
        <Text size="medium">Previously seen emails</Text>
        <Text>There's nothing for you</Text>
      </View>
    </View>
  );
});

export default ImboxPage;
