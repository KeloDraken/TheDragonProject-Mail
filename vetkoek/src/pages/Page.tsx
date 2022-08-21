import { View } from "react-native";
import { Footer, Logo, Navbar } from "../components/";
import { styles } from "./style";

export class Page {
  public PageContent(): JSX.Element {
    return <></>;
  }

  public render(): JSX.Element {
    return (
      <View>
        <View style={styles.container}>
          <this._Navbar />
          <this.PageContent />
        </View>
      </View>
    );
  }

  private _Navbar(): JSX.Element {
    return (
      <View style={styles.navbarContainer}>
        <Logo />
        <Navbar />
      </View>
    );
  }

  private _Footer(): JSX.Element {
    return <Footer />;
  }
}
