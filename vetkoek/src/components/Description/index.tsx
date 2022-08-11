import { Text, View } from "react-native";
import { styles } from "./styles";

function Description(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.description}>
        Gmail sucked for years. Not anymore — we fixed it.
      </Text>
      <Text allowFontScaling={false} style={styles.info}>
        Our fresh approach transforms Gmail into something you want to use,
        not something you're forced to deal with.
      </Text>
    </View>
  );
}

export default Description;
