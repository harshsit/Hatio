import React, { Component } from "react";

import {
  STATUS,
  Loading,
  Avatar,
  Logo,
  Logotype,
  Container,
  Header
} from "gitstar-components";

const CLIENT_ID = "ce68c3b9cb4f1035a0af";
const REDIRECT_URI = "http://localhost:3000/";

class App extends Component {
  state = {
    status: STATUS.INITIAL,
    token: null
  };

  // componentDidMount() {
  //   const code =
  //     window.location.href.match(/?code=(.*)/) &&
  //     window.location.href.match(/?code=(.*)/)[1];
  //   console.log(code);
  // }
  render() {
    return (
      <Container>
        <Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo />
            <Logotype />
          </div>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
          >
            Login
          </a>
        </Header>
      </Container>
    );
  }
}

export default App;