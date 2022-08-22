import React from "react";
import { Image, View } from "react-native";
// import ReactTimeAgo from "react-time-ago";
import { Text } from "../../components";
import { styles } from "./styles";

interface ImboxItem {
  object_id: string;
  from_user?: {
    id?: number;
    email_address: string;
    fullname: string;
    profile_pic: string;
  };
  to_users: string;
  subject: string | null | undefined;
  body: string;
  received_datetime: string;
}

interface Props {
  item: ImboxItem;
}

const _ImboxItem: React.FC<Props> = ({ item }): JSX.Element => {
  const source = {
    html: item.body,
  };
  return (
    <View style={styles.container}>
      <Image
        accessible={false}
        source={{ uri: item.from_user!.profile_pic }}
        resizeMode={"contain"}
        style={styles.profilePic}
      />

      <View style={styles.itemInfoContainer}>
        <Text style={styles.itemFromUserEmail}>
          {item.from_user!.email_address}
        </Text>
        <Text>{item.subject}</Text>

        <View style={styles.metaData}>
          <Text style={styles.timeReceived}>6 hours ago</Text>
          <Text style={[styles.timeReceived, styles.pipe]}>|</Text>
          <Text style={[styles.timeReceived, styles.icon]}>
            <span className="material-icons-outlined">archive</span>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default _ImboxItem;
