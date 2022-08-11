import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen } from "../pages";

const LoggedOutStack = createNativeStackNavigator();

export default function Router() {
  return (
    <LoggedOutStack.Navigator>
      <LoggedOutStack.Screen
        name="landing"
        component={LandingScreen}
        options={{ title: "KeloDraken Mail" }}
      />
    </LoggedOutStack.Navigator>
  );
}
