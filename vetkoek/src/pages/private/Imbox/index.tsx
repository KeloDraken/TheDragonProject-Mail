import { View } from "react-native";
import { Text } from "../../../components";
import { Page } from "../../Page";
import { styles } from "./styles";

class _ImboxPage extends Page {
  public PageContent(): JSX.Element {
    return (
      <View>
        <View style={styles.description}>
          <Text size="medium">New for you</Text>
          <Text>There's nothing for you</Text>
        </View>
        <View style={styles.description}>
          <Text size="medium">Previously seen emails</Text>
          <Text>There's nothing for you</Text>
        </View>
      </View>
    );
  }
}

function ImboxPage(): JSX.Element {
  return new _ImboxPage().render();
}

export default ImboxPage;
