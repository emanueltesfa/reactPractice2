import React, { useState } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    if (text === "Random title") {
      setText("Hello World");
    } else {
      setText("Random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
