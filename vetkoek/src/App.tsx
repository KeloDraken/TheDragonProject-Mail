import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage, LoginPage } from "./pages";

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: "home",
    Login: "login",
    NotFound: "*",
  },
};
const linking = {
  prefixes: ["http://localhost:8080"],
  config: config,
};

function App(): JSX.Element {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{ title: "KeloDraken Mail" }}
          component={LandingPage}
        />
        <Stack.Screen
          name="login"
          options={{ title: "KeloDraken Mail - Sign in" }}
          component={LoginPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
