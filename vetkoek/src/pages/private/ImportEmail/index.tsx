import { view } from "@risingstack/react-easy-state";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { View } from "react-native";

const ImportEmail = view((): JSX.Element => {
  const [cookies] = useCookies(["IMPORTED", "ISAUTH"]);

  useEffect((): void => {
    if (cookies.ISAUTH === null || cookies.ISAUTH === undefined) {
      window.location.replace("/accounts/login");
    }
  }, []);

  return (
    <View>
      <h1>ImportEmail</h1>
    </View>
  );
});
export default ImportEmail;
