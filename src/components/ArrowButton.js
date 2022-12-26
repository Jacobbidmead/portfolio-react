import React, { useState } from "react";

const ArrowButton = () => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);
  };

  return (
    <>
      <img
        className="down-arrow"
        onClick={handleClick}
        style={{ transform: `rotate(${rotation}deg)`, transition: "0.3s ease" }}
        src="images/down-arrow.png"
        alt=""
      />
    </>
  );
};

export default ArrowButton;
