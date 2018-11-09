import React, { Component } from "react";

import { Provider } from "react-redux";

import store from "../store";
import FriendsList from "./FriendList";

class App extends Component {
  render() {
    const name = "Jhon";
    return (
      <Provider store={store}>
        <div>
          <FriendsList name={name} />
        </div>
      </Provider>
    );
  }
}

export default App;
