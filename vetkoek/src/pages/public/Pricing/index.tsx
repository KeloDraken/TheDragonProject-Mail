import { View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Marquee, Text } from "../../../components";
import { Page } from "../../Page";
import { styles } from "./styles";

class _Pricing extends Page {
  public PageContent(): JSX.Element {
    return (
      <View>
        <View style={styles.description}>
          <Text size="large">One price, no tiers</Text>
          <Text
            style={{ marginBottom: heightPercentageToDP("3") }}
            size="small"
          >
            We don't sell ads. We don't sell data. We don't sell your private
            information. We simply sell an excellent email app - we'd give it
            away for free, but servers and hosting won't pay for themselves. We
            only ask for what we need to run the service, get full access to the
            app for only $3 a month.
          </Text>
          <Marquee />
        </View>

        <View style={styles.description}>
          <Text size="large">Pricing FAQs</Text>
          <View style={styles.description}>
            <Text size="medium">
              Will I be charged when my 14-day trial is up?
            </Text>
            <Text size="small">
              No. We don't ask for a credit card to try KeloDraken, so we can't
              charge you until you decide you want to become a customer. 100%
              your call, no surprises.
            </Text>
          </View>
          <View style={styles.description}>
            <Text size="medium">Can I cancel at any time?</Text>
            <Text size="small">
              Yes. Your emails will still be accessible via Gmail.
            </Text>
          </View>
          <View style={styles.description}>
            <Text size="medium">Do you bill in local currencies?</Text>
            <Text size="small">
              We only bill in US Dollars. We know that means a high price in
              certain markets, and we know there's lots of interest in
              KeloDraken in those markets. We'll consider alternate pricing down
              the road, but for now USD it is.
            </Text>
          </View>
          <View style={styles.description}>
            <Text size="medium">What if I have more questions?</Text>
            <Text size="small">
              Send us an email at{" "}
              <Text
                size="small"
                style={{
                  textDecorationStyle: "solid",
                  textDecorationLine: "underline",
                }}
              >
                info@kelodraken.com
              </Text>{" "}
              and we'll help you out.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const Pricing = (): JSX.Element => {
  return new _Pricing().render();
};
export default Pricing;
