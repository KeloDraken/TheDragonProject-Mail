import { GoogleOAuthProvider } from "@react-oauth/google";
import { LandingScreen } from "./pages";

const googleClientId: string =
  "991569752579-gig8rttagf7jk8ihfdgst1p53kme3ah9.apps.googleusercontent.com";

function App(): JSX.Element {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <LandingScreen />
    </GoogleOAuthProvider>
  );
}

export default App;
