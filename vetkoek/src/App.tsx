import { NavigationContainer } from "@react-navigation/native";
import Router from "./router";

const linking = {
  prefixes: ["http://localhost:8080", "https://mail.kelodraken.com"],
};

function App(): JSX.Element {
  return (
    <NavigationContainer linking={linking}>
      <Router />
    </NavigationContainer>
  );
}

export default App;
