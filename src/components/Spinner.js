import React from "react";

const Spinner = ({mode}) => {
  return (
    <div className="text-center">
      <div className={`spinner-border text-${mode==='dark'?'light':'dark'}`} role="status"></div>
    </div>
  );
};

export default Spinner;
