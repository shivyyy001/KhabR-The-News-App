import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type}
        className={props.className}
        onClick={props.clickHandler}
        disabled={props.disabled}
        style={{ display: `${props.display}` }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
