import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { View } from "react-native";
import { useParams } from "react-router-dom";
import { Logo, Navbar, Text } from "../../../components";
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

function ViewEmail(): JSX.Element {
  const [cookies] = useCookies(["IMPORTED", "ISAUTH", "UIDT"]);
  let { id } = useParams();
  const [email, setEmail] = useState<Array<ImboxItem>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetPost = (): void => {
    const endpoint = `http://127.0.0.1:8000/mail/get/${id}`;

    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${cookies.UIDT}`,
        },
      })
      .then((response): void => {
        setEmail(response.data.results);
        setLoading(false);
      });
  };

  useEffect((): void => {
    handleGetPost();
    window.scrollTo(0, 0);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Logo />
        <Navbar />
      </View>
      <View style={styles.pageHeading}>
        {loading ? (
          <Text size="medium">loading...</Text>
        ) : (
          email.map((item, index) => {
            return (
              <View style={{ backgroundColor: "#ffffff" }} key={index}>
                <Text size="small">{item.subject}</Text>
                <View style={styles.emailContainer}>
                  <div dangerouslySetInnerHTML={{ __html: item.body }} />
                  {/* <iframe
                    height="100%"
                    width="100%"
                    srcDoc={item.body}
                    frameBorder="0"
                    
                  ></iframe> */}
                </View>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
}
export default ViewEmail;
