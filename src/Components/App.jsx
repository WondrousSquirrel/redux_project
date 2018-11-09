import React, { Component } from "react";

import { Provider } from "react-redux";

import store from "../store";
import FriendsList from "./FriendList";

import "../css/main.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <FriendsList />
        </div>
      </Provider>
    );
  }
}

export default App;
