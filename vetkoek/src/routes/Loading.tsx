import { view } from "@risingstack/react-easy-state";

import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { ActivityIndicator, View } from "react-native";

import { Text } from "../components";

import { styles } from "./style";

const Loading = view((): JSX.Element => {
  const [cookies, setCookie] = useCookies();

  const setUserObjectID = (object_id: string, username: string): void => {
    setCookie("UOID", object_id, {
      path: "/",
      maxAge: 2628000, // lasts 1 month
    });
    setCookie("username", username, {
      path: "/",
      maxAge: 2628000,
    });
  };

  const checkMailImported = (has_imported: boolean) => {
    setCookie("IMPORTED", has_imported, {
      path: "/",
      maxAge: 2628000,
    });
  };

  const getUserID = (token: string): void => {
    const endpoint: string = "http://127.0.0.1:8000/accounts/object_id/";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response): void => {
        const object_id: string = response.data.object_id;
        const username: string = response.data.username;

        if (response.data.has_imported === true) {
          checkMailImported(true);
        } else {
          checkMailImported(false);
        }

        setUserObjectID(object_id, username);
      });
  };

  useEffect((): void => {
    const token: string = cookies.UIDT;

    if (token !== null && token !== undefined) {
      setCookie("ISAUTH", true, {
        path: "/",
        maxAge: 2628000,
      });
      getUserID(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies.UIDT, cookies.UOID]);

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles._logoText}>kelodraken</Text>
        <ActivityIndicator color={"#000"} size={30} />
      </View>
    </View>
  );
});

export default Loading;
