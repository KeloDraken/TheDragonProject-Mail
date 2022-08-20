import React from "react";
import { View } from "react-native";
import { Footer, Logo, Navbar } from "../components/";
import { styles } from "./style";

export class Page {
  public PageContent(): JSX.Element {
    return <React.Fragment></React.Fragment>;
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <this._Navbar />
        <this.PageContent />
        <this._Footer />
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
