import { NavigationContainer } from "@react-navigation/native";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Router from "./router";

const googleClientId: string =
  "991569752579-gig8rttagf7jk8ihfdgst1p53kme3ah9.apps.googleusercontent.com";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GoogleOAuthProvider clientId={googleClientId}>
       <Router />
      </GoogleOAuthProvider>
    </NavigationContainer>
  );
}

export default App;
