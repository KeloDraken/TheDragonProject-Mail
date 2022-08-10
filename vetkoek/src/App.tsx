import { GoogleLogin } from "react-google-login";
import { SafeAreaView, StatusBar, Text, useColorScheme } from "react-native";
import { handleLogin } from "./utils/sdk";

const googleClientId =
  "991569752579-gig8rttagf7jk8ihfdgst1p53kme3ah9.apps.googleusercontent.com";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Text>Hello World</Text>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={response => handleLogin(response)}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            type="button"
            className="login-with-google-btn">
            Sign in with Google
          </button>
        )}
        onFailure={err => console.log('Google Login failed', err)}
        isSignedIn={true}
      />
    </SafeAreaView>
  );
};

export default App;
