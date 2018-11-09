import React, { Component } from "react";

import { Provider } from "react-redux";

import store from "../store";
import FriendsList from "./FriendList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <FriendsList />
        </div>
      </Provider>
    );
  }
}

export default App;
