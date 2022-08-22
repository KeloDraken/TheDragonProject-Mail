import { view } from "@risingstack/react-easy-state";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Logo, Navbar, Text } from "../../../components";
import { User } from "../../interfaces";
import { styles } from "./styles";

const ImportEmail = view((): JSX.Element => {
  const [cookies, setCookie, deleteCookie] = useCookies([
    "IMPORTED",
    "ISAUTH",
    "UIDT",
  ]);
  const [password, setPassword] = useState<string>("");

  useEffect((): void => {
    if (cookies.ISAUTH === null || cookies.ISAUTH === undefined) {
      window.location.replace("/accounts/login");
    }
    if (
      cookies.IMPORTED !== null &&
      cookies.IMPORTED !== undefined &&
      cookies.IMPORTED === "true"
    ) {
      window.location.replace("/");
    }
  }, [cookies.ISAUTH, cookies.IMPORTED]);

  const getUser = (): void => {
    const endpoint: string = "http://127.0.0.1:8000/accounts/object_id/";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${cookies.UIDT}`,
        },
      })
      .then((response): void => {
        const user = {
          object_id: response.data.object_id,
          username: response.data.username,
          profile_pic: response.data.profile_pic,
          cover_pic: response.data.cover_pic,
          display_name: response.data.display_name,
          bio: response.data.bio,
          is_verified: response.data.is_verified,
          has_imported: response.data.has_imported,
        };
        beginImport(user);
      });
  };

  const beginImport = (user: User): void => {
    const endpoint = "http://127.0.0.1:8000/mail/import/";

    const data: User = {
      object_id: user.object_id,
      username: user.username,
      profile_pic: user.profile_pic,
      cover_pic: user.cover_pic,
      display_name: user.display_name,
      bio: user.bio,
      is_verified: user.is_verified,
      has_imported: user.has_imported,
      app_password: password,
    };
    axios
      .put(endpoint, data, {
        headers: {
          Authorization: `Bearer ${cookies.UIDT}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          deleteCookie("IMPORTED");
          setCookie("IMPORTED", true, {
            path: "/",
            maxAge: 2628000,
          });
          window.location.reload();
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Logo />
        <Navbar />
      </View>
      <View style={styles.description}>
        <Text size="large">Import your emails from Gmail</Text>
        <Text size="small">
          To get started using KeloDraken, you'll need to import your inbox from
          Gmail. To do that, you'll need to{" "}
          <a
            title="How to create a Google app password"
            target={"_blank"}
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
            href="https://support.google.com/mail/answer/185833?hl=en"
          >
            follow these steps to get an app password
          </a>.
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Please paste in your app password"
            autoFocus
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            allowFontScaling={false}
            keyboardType="default"
            style={styles.formInput}
            onChangeText={setPassword}
            returnKeyType="send"
          />
          {/* cfkyzqmzpneutqzp */}
          <TouchableOpacity onPress={() => getUser()} style={styles.button}>
            <Text style={styles.buttonText}>Begin import process</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});
export default ImportEmail;
