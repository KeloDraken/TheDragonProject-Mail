import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LandingScreen } from "../../pages";

const Stack = createNativeStackNavigator();

export default function LoggedOutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{ title: "KeloDraken Mail" }}
      />
      <Stack.Screen
        name="imbox"
        component={HomeScreen}
        options={{ title: "KOMN" }}
      />
    </Stack.Navigator>
  );
}
