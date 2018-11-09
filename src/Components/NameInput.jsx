import React, { memo } from "react";

const NameInput = memo(function NameInput(props) {
  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" value={props.name} onChange={props.onNameChange} />
        </label>
      </form>
    </>
  );
});

export default NameInput;
