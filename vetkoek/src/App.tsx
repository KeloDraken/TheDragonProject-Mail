import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LandingScreen } from "./pages";

const googleClientId: string =
  "991569752579-gig8rttagf7jk8ihfdgst1p53kme3ah9.apps.googleusercontent.com";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GoogleOAuthProvider clientId={googleClientId}>
        <Stack.Navigator>
          <Stack.Screen
            name="landing"
            component={LandingScreen}
            options={{ title: "KeloDraken Mail" }}
          />
        </Stack.Navigator>
      </GoogleOAuthProvider>
    </NavigationContainer>
  );
}

export default App;
