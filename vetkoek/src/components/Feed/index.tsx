import { View } from "react-native";
import { SearchComponent } from "..";
import { styles } from "./styles";

function Feed(): JSX.Element {
  return (
    <View style={styles.container}>
      <SearchComponent />
      <h1>Feed</h1>
    </View>
  );
}

export default Feed;
