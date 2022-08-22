import React from "react";
import { View } from "react-native";
import { Text } from "../../components";
import { styles } from "./styles";

interface ImboxItem {
  id: number;
  from_user?: {
    id?: number;
    email_address?: string;
    fullname?: string;
    profile_pic?: string;
  };
  to_users: string;
  subject: string | null | undefined;
  body: string;
}

interface Props {
  item: ImboxItem;
}

const _ImboxItem: React.FC<Props> = ({ item }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>{item.subject}</Text>
    </View>
  );
};
export default _ImboxItem;
