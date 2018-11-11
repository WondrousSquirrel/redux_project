import React from "react";

function FriendInfo(props) {
  const info = props.info;
  return (
    <div>
      <h1>{info.name}</h1>
    </div>
  );
}

export default FriendInfo;
