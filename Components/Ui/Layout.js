import React from "react";
import Navigation from "../Ui/Navigation/Navigation";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
