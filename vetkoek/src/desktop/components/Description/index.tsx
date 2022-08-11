import { Text, View } from "react-native";
import { styles } from "./styles";

function Description(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.description}>
      Gmail done right
      </Text>
      <Text allowFontScaling={false} style={styles.info}>
      Gmail sucked for years. Not anymore — we fixed it. Our fresh approach transforms Gmail into something you want to use,
        not something you're forced to deal with.
      </Text>
    </View>
  );
}

export default Description;
