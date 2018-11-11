import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFriend } from "../actions/friendActions";

import "../css/content.css";

import NameInput from "./NameInput";

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.onClick = this.onClick.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onClick(e) {
    if (confirm(`Добавить ${this.state.name} в список друзей?`)) {
      this.props.addFriend(this.state.name);
      this.setState({ name: "" }); // очищаем ввод от предыдущего значения
      console.log("Друг добавлен в список");
    } else {
      console.log("Друг не был добавлен в список");
      e.preventDefault();
    }
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Список Друзей</h1>
        </div>
        <br />
        <div className="content">
          {this.props.friends.id.map((friend, index) => (
            <p href="#" key={index}>
              id:{index + 1} &nbsp; имя:&nbsp;
              {this.props.friends.friendsById[friend].info.name}
            </p>
          ))}

          <hr />
          <NameInput name={this.state.name} onNameChange={this.onNameChange} />
          <button type="submit" onClick={this.onClick}>
            Submit
          </button>
        </div>
      </>
    );
  }
}

// props validation
FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
  addFriend: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  // состояние хранилища в props
  friends: state.friends
});

const mapActionsToProps = dispatch => {
  // переводим действия в props
  return bindActionCreators(
    {
      addFriend: addFriend
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FriendList);
