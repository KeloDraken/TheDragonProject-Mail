import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../pages";

const Stack = createNativeStackNavigator();

export default function LoggedInStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="imbox"
        component={HomeScreen}
        options={{ title: "KeloDraken Mail - Imbox" }}
      />
    </Stack.Navigator>
  );
}
