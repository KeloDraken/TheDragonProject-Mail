import { View } from "react-native";
import { FeedComponent, SidebarComponent } from "../../components";
import { styles } from "./styles";

function HomePage(): JSX.Element {
  return (
    <View style={styles.container}>
      <SidebarComponent />
      <FeedComponent />
    </View>
  );
}

export default HomePage;
