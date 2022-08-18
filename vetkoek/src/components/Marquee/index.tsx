import Marquee from "react-fast-marquee";
import { Text } from "../../components";
import { styles } from "./styles";

export default function _Marquee(): JSX.Element {
  return (
    <Marquee
      style={styles.container}
      pauseOnHover={true}
      pauseOnClick={false}
      gradientWidth={50}
      speed={60}
    >
      <Text style={styles.marqueeText}>
        Screen emails like you screen calls
      </Text>
      <Text style={styles.marqueeText}>
        Add private “notes to self” to any email thread
      </Text>
      <Text style={styles.marqueeText}>Read your emails together</Text>
      <Text style={styles.marqueeText}>Put receipts in The Paper Trail</Text>
      <Text style={styles.marqueeText}>
        Fix bad subjects without busting threads
      </Text>
      <Text style={[styles.marqueeText, styles.imbox]} size="small">
        The Imbox: It's not a typo
      </Text>
      <Text style={styles.marqueeText}>
        Focus & Reply: Line 'em up, knock 'em down
      </Text>
      <Text style={styles.marqueeText}>New For You & Previously Seen</Text>
      <Text style={styles.marqueeText}>
        Find files without digging through threads
      </Text>
      <Text style={styles.marqueeText}>
        Quiet by default, loud at your discretion
      </Text>
      <Text style={styles.marqueeText}>A built-in 'Reply Later' workflow</Text>
      <Text style={styles.marqueeText}>
        Clips: Surface bits, don't dig for them
      </Text>
      <Text style={styles.marqueeText}>Just set it aside</Text>
    </Marquee>
  );
}
