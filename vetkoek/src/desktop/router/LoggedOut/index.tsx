import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen } from "../../pages";

const Stack = createNativeStackNavigator();

export default function LoggedOutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="app"
        component={LandingScreen}
        options={{ title: "KeloDraken Mail" }}
      />
    </Stack.Navigator>
  );
}
