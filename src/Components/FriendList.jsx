import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFriend } from "../actions/friendActions";

class FriendList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (confirm("Add Rick to Friends?")) {
      this.props.addFriend(this.props.name);
      console.log("Rick добавлен в список друзей");
    } else {
      console.log("Rick не был добавлен в список друзей");
      e.preventDefault();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Friend List</h1>
        <ul>
          {this.props.friends.id.map((friend, index) => (
            <li key={index}>
              {this.props.friends.friendsById[friend].info.name}
            </li>
          ))}
        </ul>
        <button type="submit" onClick={this.onClick}>
          Submit
        </button>
      </div>
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

const mapActionsToProps = (dispatch, props) => {
  // переводим действия в props
  console.log(props);
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
