import React, { Component } from "react";

import { Provider } from "react-redux";

import store from "../store";
import FriendsList from "./FriendList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <FriendsList name={this.state.name} />
          <hr />
          <form>
            <label>
              Name:
              <input type="text" name="name" onChange={this.onChange} />
            </label>
          </form>
        </div>
      </Provider>
    );
  }
}

export default App;
