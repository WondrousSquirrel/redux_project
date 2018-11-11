import React, { Component } from "react";
import FriendInfo from "./FriendInfo";

class Friend extends Component {
  // Являет собой компонент хранящий состояние collapse
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toogle = this.toogle.bind(this);
  }

  toogle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  render() {
    const info = this.props.info; // попытка уменьшит кол-во набираемых символов
    return (
      <>
        {/* По клику изменяем состояние и таким образом отображаем полную информацию */}
        <p onClick={this.toogle}>{info.name}</p>
        {/*Если isOpen === true, то компонент FriendInfo будет отображен */}
        {this.state.isOpen && <FriendInfo info={info} />}
      </>
    );
  }
}

export default Friend;
