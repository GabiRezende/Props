import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default class script extends Component {
  render() {
    return (
      <>
        <Header title="Informações" />
        <Main nome="Gabriela" idade="30" querestudar="react" />
      </>
    );
  }
}
